/* ============================================================
   Mock-IELTS · auth.js
   Sign-up / log-in with ONLY: full name, your Gmail, password,
   confirm password. Credentials live in a per-browser IndexedDB
   vault (no backend, no API keys). Export/import backup lets you
   move account + results between devices honestly.
   ============================================================ */
(() => {
  "use strict";

  const DB_NAME = "mock_ielts_vault_v1";
  const STORE = "accounts";
  const SESSION_KEY = "mock_ielts_session";
  const USERS_KEY = "mock_ielts_users_cache";

  const EMAIL_RE = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;

  /* ---------- IDB helpers ---------- */
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: "key" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  function idbAll() {
    return openDB().then((db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, "readonly");
        const rq = tx.objectStore(STORE).getAll();
        rq.onsuccess = () => resolve(rq.result || []);
        rq.onerror = () => reject(rq.error);
      })
    );
  }
  function idbPut(rec) {
    return openDB().then((db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).put(rec);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error);
      })
    );
  }

  /* ---------- hashing (WebCrypto, salt + SHA-256) ---------- */
  async function sha256Hex(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function saltHex() {
    const b = new Uint8Array(16);
    crypto.getRandomValues(b);
    return Array.from(b, (x) => x.toString(36)).join("").slice(0, 24);
  }
  function userKeyOf(email) {
    return "u_" + String(email).trim().toLowerCase().replace(/[^a-z0-9@._-]/gi, "");
  }

  const validEmail = (e) => EMAIL_RE.test(String(e).trim());
  const validPass = (p) => String(p).length >= 8;

  function cache() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); }
    catch (_) { return {}; }
  }
  function cacheWrite(map) { localStorage.setItem(USERS_KEY, JSON.stringify(map)); }
  function sessionUser() {
    const k = localStorage.getItem(SESSION_KEY);
    const all = cache();
    return k && all[k] ? all[k] : null;
  }

  const Auth = {
    validEmail, validPass,

    async signup(fullName, email, password, confirm) {
      const name = String(fullName || "").trim();
      if (name.length < 2) return { ok: false, msg: "Please enter your full name (at least 2 letters)." };
      if (!validEmail(email)) return { ok: false, msg: "Enter a valid Gmail address, e.g. name@gmail.com" };
      if (!validPass(password)) return { ok: false, msg: "Password must be at least 8 characters." };
      if (password !== confirm) return { ok: false, msg: "Passwords don't match — please re-type." };

      const key = userKeyOf(email);
      const accounts = await idbAll();
      const clash = accounts.find((a) => a.key === key);
      if (clash) return { ok: false, msg: "That Gmail is already registered — log in instead." };

      const salt = saltHex();
      const hash = await sha256Hex(salt + "::" + password);
      const rec = { key, name, email: String(email).trim(), salt, hash, created: Date.now() };
      try {
        await idbPut(rec);
      } catch (_) {
        return { ok: false, msg: "Couldn't save your account on this device. Try again." };
      }
      const c = cache();
      c[key] = { key, name, email: rec.email, created: rec.created };
      cacheWrite(c);
      localStorage.setItem(SESSION_KEY, key);
      return { ok: true, user: { key, name, email: rec.email } };
    },

    async login(email, password) {
      if (!validEmail(email)) return { ok: false, msg: "Enter a valid Gmail address." };
      const key = userKeyOf(email);
      const accounts = await idbAll();
      const rec = accounts.find((a) => a.key === key);
      if (!rec) return { ok: false, msg: "No account found for that Gmail — sign up first." };
      const hash = await sha256Hex(rec.salt + "::" + password);
      if (hash !== rec.hash) return { ok: false, msg: "Incorrect password. Try again." };
      const c = cache();
      c[key] = { key, name: rec.name, email: rec.email, created: rec.created };
      cacheWrite(c);
      localStorage.setItem(SESSION_KEY, key);
      return { ok: true, user: { key, name: rec.name, email: rec.email } };
    },

    logout() { localStorage.removeItem(SESSION_KEY); },
    current() { return sessionUser(); },
    isIn() { return !!sessionUser(); },
  };

  /* ---------- portable backup (honest, no backend) ---------- */
  async function exportBackup() {
    const recs = await idbAll();
    const blob = new Blob(
      [JSON.stringify({ app: "mock-ielts", v: 1, exported: Date.now(), accounts: recs }, null, 2)],
      { type: "application/json" }
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mock-ielts-backup.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    return { ok: true, n: recs.length };
  }

  async function importBackup(file) {
    let data;
    try { data = JSON.parse(await file.text()); }
    catch (_) { return { ok: false, msg: "That file isn't valid Mock-IELTS backup JSON." }; }
    if (!data || data.app !== "mock-ielts" || !Array.isArray(data.accounts)) {
      return { ok: false, msg: "That isn't a Mock-IELTS backup file." };
    }
    let n = 0;
    for (const r of data.accounts) {
      if (r && r.key && r.email && r.salt && r.hash) {
        try { await idbPut(r); n++; } catch (_) {}
      }
    }
    if (n > 0) {
      const all = await idbAll();
      const c = {};
      all.forEach((a) => (c[a.key] = { key: a.key, name: a.name, email: a.email, created: a.created }));
      cacheWrite(c);
    }
    return { ok: true, n };
  }

  window.MockIELTS = window.MockIELTS || {};
  window.MockIELTS.Auth = Auth;
  window.MockIELTS.backup = { export: exportBackup, import: importBackup };
})();

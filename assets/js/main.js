/* ============================================================
   Mock-IELTS · main.js (shared page layer)
   Session guard, navigation chrome, per-user results vault,
   honest export/import of results, small UI helpers.
   Depends on: auth.js, data.js (loaded first).
   ============================================================ */
(() => {
  "use strict";

  const RESULTS_KEY = "mock_ielts_results_v1"; // { [userKey]: [attempt,...] }

  /* ---------- navigation chrome ---------- */
  const NAV_LINKS = [
    ["index.html", "Home"],
    ["reading.html", "Reading"],
    ["listening.html", "Listening"],
    ["writing.html", "Writing"],
    ["speaking.html", "Speaking"],
    ["dashboard.html", "My Progress"]
  ];
  const RESOURCES_PAGE = "resources.html";

  function renderNav(active) {
    const bar = document.getElementById("nav");
    if (!bar) return;
    const user = MockIELTS.Auth ? MockIELTS.Auth.current() : null;
    let html = '<div class="nav-inner">'
      + '<a class="brand" href="index.html">' + brand() + '</a>'
      + '<button class="mobile-burger" aria-label="Menu" onclick="MockIELTS.toggleMenu()">'
      + '<span></span><span></span><span></span></button>'
      + '<nav class="nav-links">';
    NAV_LINKS.forEach(([href, label]) => {
      const cls = href === active ? ' class="active"' : "";
      html += '<a' + cls + ' href="' + href + '">' + label + '</a>';
    });
    html += '<a href="' + RESOURCES_PAGE + '">Resources</a>';
    html += '</nav>'
      + '<div class="nav-user">';
    if (user) {
      html += '<span class="user-chip" title="Signed in as ' + esc(user.email) + '">' + esc(user.name.split(" ")[0]) + '</span>'
        + '<button class="btn btn-ghost btn-sm" onclick="MockIELTS.logout()">Sign out</button>';
    } else {
      html += '<a class="btn btn-ghost btn-sm" href="login.html">Log in</a>'
        + '<a class="btn btn-orange btn-sm" href="signup.html">Create free account</a>';
    }
    html += '</div></div>';
    bar.innerHTML = html;
  }

  function brand() {
    return '<span class="brandmark">M</span><span class="brandtext">ock-IELTS</span>';
  }

  function toggleMenu() {
    const links = document.querySelector(".nav-links");
    if (links) links.classList.toggle("open");
  }

  /* ---------- session guard for protected pages ---------- */
  function requireAuth(fallback) {
    if (!MockIELTS.Auth || !MockIELTS.Auth.isIn()) {
      location.replace((fallback || "login.html") + "?next=" + encodeURIComponent(location.pathname.split("/").pop()));
      return false;
    }
    return true;
  }

  /* ---------- per-user results vault ---------- */
  function resultsAll() {
    try { return JSON.parse(localStorage.getItem(RESULTS_KEY) || "{}"); }
    catch (_) { return {}; }
  }
  function resultsWrite(map) { localStorage.setItem(RESULTS_KEY, JSON.stringify(map)); }

  function currentUserKey() {
    return MockIELTS.Auth && MockIELTS.Auth.current() ? MockIELTS.Auth.current().key : null;
  }

  function myResults() {
    const k = currentUserKey();
    const all = resultsAll();
    return k ? (all[k] || []) : [];
  }

  function saveResult(attempt) {
    const k = currentUserKey();
    if (!k) return;
    const all = resultsAll();
    const list = all[k] || [];
    list.push(Object.assign({ savedAt: Date.now() }, attempt));
    all[k] = list.slice(-200);
    resultsWrite(all);
  }

  function exportResults() {
    const data = JSON.stringify({ app: "mock-ielts", kind: "results", exported: Date.now(), user: currentUserKey(), results: myResults() }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mock-ielts-results.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  function importResults(file) {
    return file.text().then((txt) => {
      let data;
      try { data = JSON.parse(txt); } catch (_) { throw new Error("That is not valid JSON."); }
      if (!data || data.app !== "mock-ielts" || !Array.isArray(data.results)) {
        throw new Error("That is not a Mock-IELTS results file.");
      }
      const k = currentUserKey();
      if (!k) throw new Error("Sign in first to import results.");
      const all = resultsAll();
      const merged = (all[k] || []).concat(data.results);
      all[k] = merged.slice(-500);
      resultsWrite(all);
      return merged.length;
    });
  }

  /* ---------- tiny helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function el(id) { return document.getElementById(id); }

  function bandBadge(band) {
    return '<span class="band">' + band.toFixed(1) + "</span>";
  }

  /* ---------- simplistic (honest) speaking timer ---------- */
  function startTimer(elId, seconds, onDone) {
    const box = el(elId);
    if (!box) return null;
    let left = seconds;
    const tick = () => {
      if (left <= 0) { box.textContent = "0:00"; if (onDone) onDone(); return "stop"; }
      const m = Math.floor(left / 60), s = left % 60;
      box.textContent = m + ":" + String(s).padStart(2, "0");
      left--;
      return null;
    };
    tick();
    const iv = setInterval(() => { if (tick() === "stop") clearInterval(iv); }, 1000);
    return iv;
  }

  function fmtDate(ts) {
    try { return new Date(ts).toLocaleDateString(); } catch (_) { return ""; }
  }

  window.MockIELTS = Object.assign(window.MockIELTS || {}, {
    renderNav,
    toggleMenu,
    requireAuth,
    saveResult,
    myResults,
    exportResults,
    importResults,
    startTimer,
    esc,
    bandBadge,
    fmtDate,
    logout() { if (MockIELTS.Auth) MockIELTS.Auth.logout(); location.href = "index.html"; }
  });
})();
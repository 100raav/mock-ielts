/* mock-ielts · test.js — one tiny data-driven engine for all four skills.
   Each skill page defines window.IELTSTest = { skill, label, seconds, questionHtml(), answers?, bandHint? }.
   Timer + scoring + saving live here and are shared. */
(() => {
  "use strict";
  const M = window.MockIELTS || {};
  const U = (window.MockIELTS = window.MockIELTS || {});

  const timers = [];
  function clearT() { timers.forEach((t) => clearInterval(t)); timers.length = 0; }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function mm(sec) {
    sec = Math.max(0, Number(sec) || 0);
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function bandLabel(b) {
    const n = Number(b);
    if (n >= 7.5) return "Good user";
    if (n >= 6.5) return "Competent user";
    if (n >= 6.0) return "Competent user";
    if (n >= 5.5) return "Modest user";
    if (n >= 5.0) return "Modest user";
    if (n >= 4.0) return "Limited user";
    return "Extremely limited user";
  }

  function init(cfg) {
    const root = document.getElementById("test");
    if (!root) return;
    clearT();

    /* header */
    let html = '<article class="panel glass-card test-panel">';
    html += '<h2 class="section-h">' + esc(cfg.label) + " " + esc(cfg.skillLabel) + "</h2>";
    if (cfg.note) html += '<p class="note note-amber">' + esc(cfg.note) + "</p>";

    /* body */
    html += '<div class="timer-band hide" id="tband"><span class="timer-label">Time remaining</span><strong class="timer" id="clock">' + mm(cfg.seconds) + "</strong></div>";
    html += '<div id="qbox">' + (cfg.body ? cfg.body() : "") + "</div>";

    /* actions */
    html += '<div class="row-band actions"><button type="button" class="btn btn-orange" data-a="start">Start timer</button>';
    html += '<button type="button" class="btn btn-orange hide" data-a="done">See my band</button></div>';
    html += "</article><div id='result'></div>";
    root.innerHTML = html;

    const start = root.querySelector("[data-a='start']");
    const done = root.querySelector("[data-a='done']");
    const clock = document.getElementById("clock");
    const tband = document.getElementById("tband");

    start.addEventListener("click", () => {
      start.classList.add("hide");
      done.classList.remove("hide");
      if (tband) tband.classList.remove("hide");
      let left = Number(cfg.seconds) || 600;
      timers.forEach((t) => clearInterval(t));
      timers.length = 0;
      const iv = setInterval(() => {
        left = Math.max(0, left - 1);
        if (clock) clock.textContent = mm(left);
        if (left <= 0) { clearInterval(iv); }
      }, 1000);
      timers.push(iv);
    });

    done.addEventListener("click", () => {
      clearT();
      let raw = 0, total = 0, tips = [];
      if (cfg.grade) { const g = cfg.grade(); raw = g.raw; total = g.total; tips = g.tips || []; }
      const band = cfg.band ? cfg.band(raw, total) : (raw > 0 ? 0 : 0);
      const finalBand = cfg.band ? cfg.band(raw, total) : null;
      if (M.Auth && M.Auth.current() && M.saveResult) {
        M.saveResult({ skill: cfg.skillKey, skillLabel: cfg.skillLabel, band: finalBand, raw, correct: raw, total, at: Date.now(), tips, minutes: Math.round((cfg.seconds || 600) / 60) });
      }
      renderResult(cfg, raw, total, finalBand, tips);
    });
  }

  function renderResult(cfg, raw, total, band, tips) {
    const root = document.getElementById("result");
    if (!root) return;
    let html = '<div class="result-hero">';
    html += '<span class="kicker">Band estimate · ' + esc(cfg.skillLabel) + "</span>";
    html += '<span class="giant-band">' + (band == null ? "—" : Number(band).toFixed(1)) + "</span>";
    html += '<p class="lede">' + (band == null ? "Your band depends on a live examiner — but your practice is recorded." : bandLabel(band) + " — an honest estimate, not a certificate.") + "</p></div>";
    if (raw !== null) html += '<div class="row-band"><span class="meta">Correct ' + raw + " / " + total + "</span></div>";
    if (tips && tips.length) {
      html += '<div class="panel glass-card"><h3 class="section-h">What to improve next</h3><ul class="bullets">';
      tips.forEach((t) => { html += "<li>" + esc(t) + "</li>"; });
      html += "</ul></div>";
    }
    html += '<div class="row-band actions"><a class="btn btn-orange" href="dashboard.html">My progress</a>';
    html += '<a class="btn btn-ghost" href="' + esc(cfg.href || "dashboard.html") + '">Try again</a></div>';
    root.innerHTML = html;
  }

  U.Test = { init, esc, mm };
})();

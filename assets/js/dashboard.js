/* ============================================================
   Mock-IELTS · dashboard.js
   Per-user progress: band-per-skill history, recent attempts,
   honest "next step" hints, and your portable result export/
   import. Everything reads from MockIELTS.myResults() on THIS
   device (per account), exactly as promised on login.
   ============================================================ */
(() => {
  "use strict";
  const M = window.MockIELTS || {};
  if (!M.Auth) return;

  const SKILLS = [
    ["reading", "Reading"],
    ["listening", "Listening"],
    ["writing", "Writing"],
    ["speaking", "Speaking"]
  ];

  function render() {
    M.renderNav("dashboard");
    if (!M.requireAuth()) return;

    const panel = document.getElementById("dash");
    if (!panel) return;
    const results = M.myResults() || [];

    let html = '<section class="hero hero-compact"><div class="hero-inner">';
    html += "<h1 class='hero-h'>My progress</h1>";
    html += "<p class='lede'>Your band estimates per skill, saved on this device under your account. Real IELTS scores come from a certified examiner — this is your honest practice trail.</p>";
    html += "</div></section>";

    /* summary chips */
    html += '<div class="kpis">';
    SKILLS.forEach(([key, label]) => {
      const mine = results.filter((r) => r.skill === key && typeof r.band === "number");
      const last = mine[mine.length - 1];
      const best = mine.length ? Math.max.apply(Math, mine.map((r) => r.band)) : null;
      html += '<div class="kpi"><span class="kpi-label">' + M.esc(label) + "</span>";
      if (last) {
        html += '<span class="kpi-val">' + M.esc(Number(last.band).toFixed(1)) + "</span>";
        html += '<span class="kpi-sub">best ' + M.esc(Number(best).toFixed(1)) + " · " + mine.length + " try" + (mine.length === 1 ? "" : "s") + "</span>";
      } else {
        html += '<span class="kpi-val muted">—</span><span class="kpi-sub">no attempts yet</span>';
      }
      html += "</div>";
    });
    html += "</div>";

    /* band history per skill */
    html += '<div class="row-band"><span class="meta">Band history (latest to earliest)</span></div>';
    SKILLS.forEach(([key, label]) => {
      const mine = results.filter((r) => r.skill === key && typeof r.band === "number").slice(-8).reverse();
      html += '<div class="panel panel-tight"><div class="panel-h"><span class="dot"></span>' + M.esc(label) + "</div>";
      if (!mine.length) { html += "<p class='muted'>Hit the skill page and do your first timed mock.</p>"; }
      else {
        html += '<div class="bandline">';
        mine.forEach((r) => {
          html += '<span class="blob" title="' + M.esc(Number(r.band).toFixed(1)) + " · " + M.esc(M.fmtDate(r.at)) + '">' + M.esc(r.band.toFixed(1)) + "</span>";
        });
        html += "</div>";
      }
      html += "</div>";
    });

    /* improvement hints */
    const hints = [];
    results.forEach((r) => {
      if (r.tips && r.tips.length) hints.push.apply(hints, r.tips);
    });
    const uniq = [];
    hints.forEach((h) => { if (h && uniq.indexOf(h) === -1 && uniq.length < 8) uniq.push(h); });
    if (uniq.length) {
      html += '<div class="panel"><div class="panel-h"><span class="dot dot-orange"></span>What to improve next</div><ul class="bullets">';
      uniq.forEach((h) => { html += "<li>" + M.esc(h) + "</li>"; });
      html += "</ul></div>";
    }

    /* actions: export/import/reset */
    html += '<div class="row-band actions dash-actions">';
    html += '<button type="button" class="btn btn-ghost" id="exp" title="Download results JSON — yours to keep or move to another device">Export results</button>';
    html += '<label class="btn btn-ghost" for="imp" role="button" tabindex="0">Import results<input type="file" id="imp" accept="application/json" class="hide"></label>';
    html += '<button type="button" class="btn btn-ghost" id="clr" title="Erase attempts for this account on this device">Clear my attempts</button>';
    html += "</div>";

    panel.innerHTML = html;

    document.getElementById("exp").addEventListener("click", () => M.exportResults());
    const imp = document.getElementById("imp");
    imp.addEventListener("change", () => {
      const f = imp.files && imp.files[0];
      if (f) { try { M.importResults(f); } catch (e) { alert(e && e.message ? e.message : "Import failed."); } render(); }
    });
    document.getElementById("clr").addEventListener("click", () => {
      if (confirm("Erase every saved attempt for this account on this device?")) { M.ClearResults && M.ClearResults(); render(); }
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  M.dashboard = M.dashboard || { render };
})();
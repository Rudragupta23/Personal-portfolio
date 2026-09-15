
(function () {
  "use strict";

  const list = (window.PORTFOLIO && window.PORTFOLIO.certifications) || [];
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const frame = $("#cv-frame");
  const img = $("#cv-img");
  const info = $("#cv-info");
  const count = $("#cv-count");
  const prev = $("#cv-prev");
  const next = $("#cv-next");

  const ICON = {
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 20h16"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  };

  const url = (id) => "certificate.html?c=" + encodeURIComponent(id);

  function indexFromUrl() {
    const id = new URLSearchParams(location.search).get("c");
    const i = list.findIndex((c) => c.id === id);
    return i;
  }

  function notFound() {
    document.title = "Certificate not found - Rudra Gupta";
    $(".cv-stage").hidden = true;
    count.textContent = "";
    info.innerHTML = `
      <span class="section-mark">Certificates</span>
      <h1>That certificate isn't here.</h1>
      <p class="cv-note">The link may be out of date. Every certificate is listed on the main page.</p>
      <div class="cv-actions">
        <a class="btn btn--primary" href="index.html#credentials">See all certifications</a>
      </div>`;
  }

  function fileName(c) {
    return (c.pdf || "").split("/").pop() || "certificate.pdf";
  }

  function render(i, animate) {
    const c = list[i];
    const n = list.length;
    const p = list[(i - 1 + n) % n];
    const q = list[(i + 1) % n];

    document.title = `${c.name} - Rudra Gupta`;
    count.textContent = `${i + 1} / ${n}`;

    const swap = () => {
      img.src = c.image;
      img.alt = `${c.name} certificate awarded to Rudra Gupta by ${c.issuer}`;
      frame.href = c.image;
    };
    if (animate) {
      frame.classList.add("is-swapping");
      const pre = new Image();
      pre.onload = pre.onerror = () => {
        swap();
        requestAnimationFrame(() => frame.classList.remove("is-swapping"));
      };
      pre.src = c.image;
    } else {
      swap();
    }

    const facts = (c.facts || [])
      .map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
      .join("");

    const covered = (c.covered || []).length
      ? `<div class="cv-block">
           <h2>What it covered</h2>
           <ul class="cv-covered">${c.covered.map((x) => `<li>${ICON.check}<span>${esc(x)}</span></li>`).join("")}</ul>
         </div>`
      : "";

    info.innerHTML = `
      <span class="section-mark">Certificate ${i + 1} of ${n}</span>
      <h1>${esc(c.name)}</h1>
      <p class="cv-issuer">${esc(c.issuer)} <span>${esc(c.date || c.year)}</span></p>
      ${c.highlight ? `<p class="cv-flag">${esc(c.highlight)}</p>` : ""}
      <p class="cv-note">${esc(c.note)}</p>
      ${facts ? `<dl class="cv-facts">${facts}</dl>` : ""}
      ${covered}
      <div class="cv-actions">
        ${c.pdf ? `<a class="btn btn--primary" href="${esc(c.pdf)}" target="_blank" rel="noopener noreferrer">Open PDF ${ICON.ext}</a>` : ""}
        ${c.pdf ? `<a class="btn btn--ghost" href="${esc(c.pdf)}" download="${esc("Rudra-Gupta-" + fileName(c))}">Download ${ICON.down}</a>` : ""}
        ${c.credentialUrl ? `<a class="btn btn--ghost" href="${esc(c.credentialUrl)}" target="_blank" rel="noopener noreferrer">Verify ${ICON.ext}</a>` : ""}
      </div>`;

    if (animate) {
      info.classList.remove("is-in");
      void info.offsetWidth; 
    }
    info.classList.add("is-in");

    prev.href = url(p.id);
    prev.dataset.i = (i - 1 + n) % n;
    prev.querySelector("b").textContent = p.name;
    next.href = url(q.id);
    next.dataset.i = (i + 1) % n;
    next.querySelector("b").textContent = q.name;

    [p, q].forEach((x) => { const im = new Image(); im.src = x.image; });
  }

  function go(i) {
    history.pushState({ i }, "", url(list[i].id));
    render(i, true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const start = indexFromUrl();
  if (start < 0) { notFound(); return; }
  history.replaceState({ i: start }, "", url(list[start].id));
  render(start, false);

  [prev, next].forEach((a) =>
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; 
      e.preventDefault();
      go(Number(a.dataset.i));
    })
  );

  window.addEventListener("popstate", () => {
    const i = indexFromUrl();
    if (i >= 0) render(i, true);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowLeft") go(Number(prev.dataset.i));
    if (e.key === "ArrowRight") go(Number(next.dataset.i));
    if (e.key === "Escape") location.href = "index.html#credentials";
  });
})();

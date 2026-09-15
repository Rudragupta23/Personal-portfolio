

(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const $ = (s, r) => (r || document).querySelector(s);

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* Icons                                                            */
  const I = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.18 9.06 7.59 10.53.56.1.76-.24.76-.53l-.01-1.88c-3.09.67-3.74-1.49-3.74-1.49-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.59 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1.02.76 2.06l-.01 3.06c0 .29.2.64.77.53 4.4-1.47 7.58-5.63 7.58-10.53C23.1 5.33 18.27.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>',
    leetcode: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.48 0a1.37 1.37 0 0 0-.98.43L7.4 5.79l-5.4 5.66a4.98 4.98 0 0 0 0 6.93l5.4 5.66A4.85 4.85 0 0 0 10.9 25.5a4.85 4.85 0 0 0 3.5-1.46l3.1-3.24a1.37 1.37 0 0 0-.04-1.94 1.37 1.37 0 0 0-1.94.04l-3.1 3.24a2.11 2.11 0 0 1-3.06 0l-5.4-5.66a2.24 2.24 0 0 1 0-3.12l5.4-5.66a2.11 2.11 0 0 1 3.06 0l3.1 3.25a1.37 1.37 0 0 0 1.94.04 1.37 1.37 0 0 0 .04-1.94l-3.1-3.25-2.9-3.04-.02-.02V1.4A1.37 1.37 0 0 0 13.48 0Z"/><path d="M21.9 11.06h-9.3a1.37 1.37 0 0 0 0 2.74h9.3a1.37 1.37 0 0 0 0-2.74Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.94-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.9a3 3 0 0 0-2.12-2.13C19.5 4.25 12 4.25 12 4.25s-7.5 0-9.38.52A3 3 0 0 0 .5 6.9C0 8.79 0 12 0 12s0 3.21.5 5.1a3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13C24 15.21 24 12 24 12s0-3.21-.5-5.1ZM9.6 15.6V8.4l6.24 3.6L9.6 15.6Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 20h16"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5M9 13h6M9 17h4"/></svg>',
    badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.2 14.3-1.4 6.4L12 18.2l5.2 2.5-1.4-6.4"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M9 9v11"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 19h10.5a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 6.4 11.1 4 4 0 0 0 7 19Z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',
  };

  const socialIcon = (id) => I[id] || I.ext;

  /* HERO                                                             */
  function renderHero() {
    const p = D.person;
    const head = (t) =>
      esc(t).replace(/\{(.+?)\}/g, '<span class="hl">$1</span>');

    $("#hero-eyebrow").innerHTML = `<span class="dot" aria-hidden="true"></span>${esc(p.eyebrow)}`;
    $("#hero-title").innerHTML = head(p.headlineLine1) + "<br>" + head(p.headlineLine2);
    $("#hero-intro").textContent = p.intro;

    $("#hero-socials").innerHTML = D.socials
      .filter((s) => !s.footerOnly)
      .map(
        (s) =>
          `<a href="${esc(s.url)}"${s.id === "email" ? "" : ' target="_blank" rel="noopener noreferrer"'} data-cursor="hot">
             ${socialIcon(s.id)}<span>${esc(s.label)}</span>
           </a>`
      )
      .join("");
  }

  /* SNAPSHOT                                                         */
  function renderSnapshot() {
    $("#snap-grid").innerHTML = D.snapshot
      .map(
        (s, i) => `
        <div class="snap-item reveal" style="--d:${i * 70}ms">
          <div class="snap-value">${esc(s.value)}${s.unit ? `<i>${esc(s.unit)}</i>` : ""}</div>
          <div class="snap-label">${esc(s.label)}</div>
          <div class="snap-note">${esc(s.note)}</div>
        </div>`
      )
      .join("");
  }

  /* ABOUT                                                            */
  function renderAbout() {
    $("#about-photo").innerHTML = `
      <img src="${esc(D.person.photo)}" alt="${esc(D.person.photoAlt)}" loading="lazy" width="880" height="1100">
      <div class="about-caption">Bengaluru, 2026</div>`;

    $("#about-body").innerHTML = D.about.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("");

    $("#about-focus").innerHTML = D.about.focus
      .map(
        (f, i) => `
        <div class="focus-item reveal" style="--d:${i * 60}ms">
          <dt>${esc(f.title)}</dt>
          <dd>${esc(f.body)}</dd>
        </div>`
      )
      .join("");
  }

  /* SKILLS
     Four cards. Each tag is a button: hovering, focusing or tapping it
     swaps the line at the bottom of the card for that tool's note.     */
  function renderSkills() {
    const wrap = $("#skills-wrap");
    wrap.innerHTML = `
      <div class="stack-grid">
        ${D.skills
          .map(
            (cat, ci) => `
            <article class="stack-card reveal" style="--d:${ci * 70}ms">
              <header class="stack-card__head">
                <h3>${esc(cat.category)}</h3>
                <span class="stack-card__count">${String(cat.items.length).padStart(2, "0")}</span>
              </header>
              <ul class="stack-tags">
                ${cat.items
                  .map(
                    (s) => `
                    <li><button type="button" class="stack-tag${s.core ? " stack-tag--core" : ""}"
                         data-note="${esc(s.note)}" aria-describedby="stack-note-${ci}">${esc(s.name)}</button></li>`
                  )
                  .join("")}
              </ul>
              <p class="stack-card__note" id="stack-note-${ci}" aria-live="polite"
                 data-default="${esc(cat.blurb || "")}">${esc(cat.blurb || "")}</p>
              <span class="stack-card__icon" aria-hidden="true">${I[cat.icon] || I.code}</span>
            </article>`
          )
          .join("")}
      </div>`;

    const show = (tag) => {
      const card = tag.closest(".stack-card");
      const note = $(".stack-card__note", card);
      card.querySelectorAll(".stack-tag.is-on").forEach((t) => t.classList.remove("is-on"));
      tag.classList.add("is-on");
      note.innerHTML = `<b>${esc(tag.textContent)}</b>${esc(tag.dataset.note)}`;
      note.classList.add("is-tool");
    };
    const reset = (card) => {
      const note = $(".stack-card__note", card);
      card.querySelectorAll(".stack-tag.is-on").forEach((t) => t.classList.remove("is-on"));
      note.textContent = note.dataset.default;
      note.classList.remove("is-tool");
    };

    wrap.addEventListener("mouseover", (e) => {
      const tag = e.target.closest(".stack-tag");
      if (tag) show(tag);
    });
    wrap.addEventListener("focusin", (e) => {
      const tag = e.target.closest(".stack-tag");
      if (tag) show(tag);
    });
    wrap.addEventListener("click", (e) => {
      const tag = e.target.closest(".stack-tag");
      if (tag) show(tag);
    });
    wrap.querySelectorAll(".stack-card").forEach((card) => {
      card.addEventListener("mouseleave", () => {
        if (!card.contains(document.activeElement)) reset(card);
      });
      card.addEventListener("focusout", (e) => {
        if (!card.contains(e.relatedTarget)) reset(card);
      });
    });
  }

  /* PROJECTS                                                         */
  function renderProjects() {
    $("#projects-list").innerHTML =
      D.projects
        .map((p, i) => {
          const live = p.links.live
            ? `<a class="btn btn--ghost btn--sm" href="${esc(p.links.live)}" target="_blank" rel="noopener noreferrer">Live site ${I.ext}</a>`
            : "";
          const code = p.links.code
            ? `<a class="btn btn--ghost btn--sm" href="${esc(p.links.code)}" target="_blank" rel="noopener noreferrer">Source ${I.github}</a>`
            : "";
          let host = "";
          try { host = p.links.live ? new URL(p.links.live).hostname.replace(/^www\./, "") : ""; } catch (e) {}
          const visual = p.image
            ? `<div class="mac-bar" aria-hidden="true">
                 <span class="mac-lights"><i></i><i></i><i></i></span>
                 <span class="mac-url">${host ? esc(host) : esc(p.name)}</span>
                 <span class="mac-spacer"></span>
               </div>
               <div class="mac-screen">
                 <img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.name + " screenshot")}" loading="lazy" decoding="async">
               </div>`
            : `<div class="mac-screen mac-screen--empty"><span>${esc(p.name)}</span></div>`;

          return `
          <article class="project reveal" data-project="${esc(p.id)}" data-cursor="view">
            <div class="project-body">
              <div class="project-meta"><em>${esc(p.context)}</em><span>${esc(p.year)}</span></div>
              <h3>${esc(p.name)}</h3>
              <p class="project-tagline">${esc(p.tagline)}</p>
              <p class="project-summary">${esc(p.summary)}</p>
              <div class="project-stack">${p.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
              <div class="project-actions">
                <button class="btn btn--primary btn--sm js-open" data-id="${esc(p.id)}">
                  Read the case study ${I.arrow}
                </button>
                ${live}${code}
              </div>
            </div>
            <div class="project-visual${p.image ? " project-visual--mac" : ""}">${visual}</div>
          </article>`;
        })
        .join("");

    if (!document.querySelector('.projects-more')) {
      $("#projects-list").insertAdjacentHTML('afterend',
        `<aside class="projects-more reveal">
           <div>
             <h3>There's more on GitHub</h3>
             <p>These four are the ones I'd want you to read about. The rest of what I've built - coursework, experiments and smaller tools - lives on my profile.</p>
           </div>
           <a class="btn btn--primary" href="https://github.com/Rudragupta23?tab=repositories" target="_blank" rel="noopener noreferrer">
             View more projects ${I.github}
           </a>
         </aside>`
      );
    }
  }

  /* PROJECT MODAL                                                    */
  function projectModalHTML(p) {
    const live = p.links.live
      ? `<a class="btn btn--primary btn--sm" href="${esc(p.links.live)}" target="_blank" rel="noopener noreferrer">Live demo ${I.ext}</a>`
      : "";
    const code = p.links.code
      ? `<a class="btn btn--ghost btn--sm" href="${esc(p.links.code)}" target="_blank" rel="noopener noreferrer">Source ${I.github}</a>`
      : "";

    const arch = p.architecture
      .map(
        (a, i) => `
        <div class="pm-arch-row"><b>${esc(a.layer)}</b><span>${esc(a.detail)}</span></div>
        ${i < p.architecture.length - 1 ? `<div class="pm-arrow">${I.down}</div>` : ""}`
      )
      .join("");

    return `
      <div class="pm">
        <div class="pm-head">
          <div class="project-meta"><em>${esc(p.context)}</em><span>${esc(p.year)}</span></div>
          <h2 id="modal-title">${esc(p.name)}</h2>
          <p class="project-tagline">${esc(p.tagline)}</p>
          <div class="project-stack">${p.stack.map((t) => `<span class="tag tag--o">${esc(t)}</span>`).join("")}</div>
          <div class="pm-actions" style="margin-top:1.2rem">${live}${code}</div>
        </div>

        <div class="pm-block">
          <h4>Overview</h4>
          <p>${esc(p.summary)}</p>
        </div>

        <div class="pm-two">
          <div class="pm-block"><h4>The problem</h4><p>${esc(p.problem)}</p></div>
          <div class="pm-block"><h4>What I built</h4><p>${esc(p.solution)}</p></div>
        </div>

        <div class="pm-block">
          <h4>Key features</h4>
          <ul class="pm-features">${p.features.map((f) => `<li><span>${esc(f)}</span></li>`).join("")}</ul>
        </div>

        <div class="pm-block">
          <h4>Architecture</h4>
          <div class="pm-arch">${arch}</div>
        </div>

        <div class="pm-two">
          <div class="pm-block"><h4>Hardest part</h4><p>${esc(p.challenges)}</p></div>
          <div class="pm-block"><h4>What I learned</h4><p>${esc(p.learned)}</p></div>
        </div>

        <div class="pm-block" style="margin-bottom:0">
          <h4>Next</h4><p>${esc(p.next)}</p>
        </div>
      </div>`;
  }

  /* EXPERIENCE                                                       */
  function renderExperience() {
    const el = $("#experience-wrap");
    if (!D.experience.length) {
      el.innerHTML = `<div class="exp-empty">Currently focused on personal projects - the four builds above are the best record of how I work.</div>`;
      return;
    }
    el.innerHTML = D.experience
      .map(
        (e) => `
        <article class="exp reveal">
          <div class="exp-side">
            <div class="exp-company">${esc(e.company)}</div>
            <div class="exp-where">${esc(e.location)}</div>
            <div class="exp-when">${esc(e.period)}</div>
            ${e.current ? `<div class="exp-now"><span class="dot" aria-hidden="true"></span>Currently here</div>` : ""}
          </div>
          <div class="exp-main">
            <h3>${esc(e.role)}</h3>
            <p class="exp-summary">${esc(e.summary)}</p>
            <ul class="exp-points">${e.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
            <div class="exp-stack">${e.stack.map((t) => `<span class="tag tag--o">${esc(t)}</span>`).join("")}</div>
          </div>
        </article>`
      )
      .join("");
  }

  /* CERTIFICATIONS
     One list. Hovering a row slides in a preview of the certificate;
     the eye button (or anywhere on the row) opens its viewer page.     */
  function renderCerts() {
    $("#cert-list").innerHTML = D.certifications
      .map(
        (c) => `
        <li class="cert-row">
          <div class="cert-row__main">
            <h3 class="cert-row__name">${esc(c.name)}</h3>
            <p class="cert-row__meta">
              <span class="cert-row__issuer">${esc(c.issuer)}</span>
              ${c.highlight ? `<span class="cert-row__flag">${esc(c.highlight)}</span>` : ""}
              <span class="cert-row__date cert-row__date--inline">${esc(c.date || c.year)}</span>
            </p>
          </div>
          ${c.thumb ? `<span class="cert-row__peek" aria-hidden="true"><img src="${esc(c.thumb)}" alt="" loading="lazy" decoding="async"></span>` : ""}
          <span class="cert-row__date">${esc(c.date || c.year)}</span>
          <a class="cert-row__eye" href="certificate.html?c=${esc(c.id)}" data-cursor="hot"
             aria-label="View certificate: ${esc(c.name)}">${I.eye}</a>
        </li>`
      )
      .join("");
  }

  /* CODING ACTIVITY                                                  */
  function renderCoding() {
    $("#coding-grid").innerHTML = D.coding.profiles
      .map(
        (p) => `
        <a class="profile-card reveal" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" data-cursor="hot">
          <h3>${esc(p.platform)}</h3>
          <span class="handle">${esc(p.handle)}</span>
          <p>${esc(p.blurb)}</p>
          ${p.platform === "GitHub"
            ? `<div class="gh-stats" id="gh-stats">
                 <div class="gh-stat loading"><b data-gh="repos">-</b><span>public repos</span></div>
                 <div class="gh-stat loading"><b data-gh="followers">-</b><span>followers</span></div>
                 <div class="gh-stat loading"><b data-gh="since">-</b><span>on GitHub since</span></div>
               </div>`
            : `<div class="gh-stats"><div class="gh-stat"><b>Daily</b><span>DSA practice in Java</span></div></div>`}
          <span class="tlink" style="margin-top:.6rem">Open profile ${I.ext}</span>
        </a>`
      )
      .join("");

    // Live numbers from the public GitHub API. Nothing hard-coded, so
    // nothing can be out of date or overstated.
    fetch("https://api.github.com/users/" + D.coding.githubUser)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((u) => {
        const set = (k, v) => {
          const el = document.querySelector(`[data-gh="${k}"]`);
          if (el) {
            el.textContent = v;
            el.parentElement.classList.remove("loading");
          }
        };
        set("repos", u.public_repos);
        set("followers", u.followers);
        set("since", new Date(u.created_at).getFullYear());
      })
      .catch(() => {
        const box = document.getElementById("gh-stats");
        if (box) box.innerHTML = `<div class="gh-stat"><b>Live</b><span>stats load from github.com</span></div>`;
      });
  }

  /* RESUME + CONTACT + FOOTER                                        */
  function renderResume() {
    $("#resume-copy").innerHTML = `
      <h2>${esc(D.resume.heading)}</h2>
      <p>${esc(D.resume.text)}</p>
      <div class="resume-actions">
        <a class="btn btn--primary" href="${esc(D.resume.file)}" target="_blank" rel="noopener noreferrer">Open resume ${I.ext}</a>
        <a class="btn btn--ghost" href="${esc(D.resume.file)}" download="Rudra-Gupta-Resume.pdf">Download PDF ${I.download}</a>
      </div>`;

    $("#resume-preview").innerHTML = `
      <a href="${esc(D.resume.file)}" target="_blank" rel="noopener noreferrer" aria-label="Open the full resume as a PDF">
        <span class="rp-tag">PDF · ${esc(D.resume.updated)}</span>
        <img src="assets/img/resume-preview.jpg" alt="First page of Rudra Gupta's resume" loading="lazy" decoding="async">
        <span class="rp-hover">Open full PDF ${I.ext}</span>
      </a>`;
  }

  function renderContact() {
    $("#contact-lead").innerHTML = `
      <h2>${esc(D.contact.heading)}</h2>
      <p>${esc(D.contact.subheading)}</p>
      <div class="contact-links">
        <a href="mailto:${esc(D.contact.email)}" data-cursor="hot">${I.mail}<b>Email</b><span>${esc(D.contact.email)}</span></a>
        <a href="tel:${esc(D.contact.phone.replace(/\s/g, ""))}" data-cursor="hot">${I.phone}<b>Phone</b><span>${esc(D.contact.phone)}</span></a>
        <a href="https://linkedin.com/in/rudrag23" target="_blank" rel="noopener noreferrer" data-cursor="hot">${I.linkedin}<b>LinkedIn</b><span>linkedin.com/in/rudrag23</span></a>
        <a href="https://github.com/Rudragupta23" target="_blank" rel="noopener noreferrer" data-cursor="hot">${I.github}<b>GitHub</b><span>github.com/Rudragupta23</span></a>
        <a href="https://leetcode.com/u/Rudragupta23/" target="_blank" rel="noopener noreferrer" data-cursor="hot">${I.leetcode}<b>LeetCode</b><span>leetcode.com/u/Rudragupta23</span></a>
      </div>`;
  }

  function renderFooter() {
    const year = new Date().getFullYear();

    $("#footer-top").innerHTML = `
      <div class="footer-brand">
        <a class="brand" href="#top">
          <span class="brand-mark" aria-hidden="true">${esc(D.person.initials)}</span>
          <span class="brand-name">${esc(D.person.name)}</span>
        </a>
        <p class="footer-tag">${esc(D.person.role)} · ${esc(D.person.location)}</p>
        <a class="footer-mail" href="mailto:${esc(D.contact.email)}">
          ${I.mail}<span>${esc(D.contact.email)}</span>
        </a>
        <div class="footer-social">
          ${D.socials
            .filter((s) => s.id !== "email")
            .map(
              (s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"
                         aria-label="${esc(s.label)}" data-cursor="hot">${socialIcon(s.id)}</a>`
            )
            .join("")}
        </div>
      </div>

      <nav class="footer-col" aria-label="Site sections">
        <h4>Explore</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#credentials">Certifications</a></li>
        </ul>
      </nav>

      <nav class="footer-col" aria-label="Work">
        <h4>Work</h4>
        <ul>
          ${D.projects
            .map(
              (p) =>
                `<li><a href="${esc(p.links.live || p.links.code)}" target="_blank" rel="noopener noreferrer">${esc(p.name)}</a></li>`
            )
            .join("")}
          <li><a href="https://github.com/Rudragupta23?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories</a></li>
        </ul>
      </nav>

      <div class="footer-cta">
        <h4>Open to opportunities</h4>
        <p>Graduating May 2027 and looking for software engineering roles and internships.</p>
        <a class="btn btn--primary btn--sm" href="#contact">Start a conversation ${I.arrow}</a>
        <a class="btn btn--ghost btn--sm" href="${esc(D.resume.file)}" download="Rudra-Gupta-Resume.pdf">Download resume ${I.download}</a>
      </div>`;

    $("#footer-bottom").innerHTML = `
      <span>© ${year} ${esc(D.person.name)} · Designed and built from scratch.</span>
      <span class="footer-hint">Try the terminal at the top - type <b>help</b>.</span>
      <a href="#top" class="footer-up">Back to top ${I.up}</a>`;
  }

  /* SEO / head                                                       */
  function renderMeta() {
    document.title = D.seo.title;
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', "content", D.seo.description);
    set('meta[property="og:title"]', "content", D.seo.title);
    set('meta[property="og:description"]', "content", D.seo.description);
    set('meta[property="og:url"]', "content", D.seo.url);
    set('meta[name="twitter:title"]', "content", D.seo.title);
    set('meta[name="twitter:description"]', "content", D.seo.description);
    set('link[rel="canonical"]', "href", D.seo.url);

    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: D.person.name,
      jobTitle: D.person.role,
      email: "mailto:" + D.contact.email,
      url: D.seo.url,
      sameAs: D.socials.filter((s) => s.id !== "email").map((s) => s.url),
      alumniOf: { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(ld);
    document.head.appendChild(tag);
  }

  window.Render = {
    all() {
      renderMeta();
      renderHero();
      renderSnapshot();
      renderAbout();
      renderSkills();
      renderProjects();
      renderExperience();
      renderCerts();
      renderCoding();
      renderResume();
      renderContact();
      renderFooter();
    },
    projectModalHTML,
    I,
  };
})();


(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Theme                                                            */
  function setTheme(mode) {
    document.documentElement.dataset.theme = mode;
    try { localStorage.setItem("rg-theme", mode); } catch (e) {}
    document.querySelectorAll("[data-theme-set]").forEach((b) => {
      const on = b.dataset.themeSet === mode;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }
  window.setTheme = setTheme;

  (function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem("rg-theme"); } catch (e) {}
    setTheme(saved || "light");
  })();

  /* Boot                                                             */
  let started = false;

  window.Render.all();

  document.addEventListener("DOMContentLoaded", start);
  if (document.readyState !== "loading") start();

  function start() {
    if (started) return;
    started = true;

    initPreloader();
    initNav();
    initReveal();
    initModal();
    initForm();
    initCursor();
    initGlow();
    initTerminal();
    initProjectHoverGlow();
  }

  /* Preloader */
  function initPreloader() {
    const pre = $("#preloader");
    if (!pre) return;
    const hide = () => pre.classList.add("done");
    setTimeout(hide, reduced ? 60 : 1900);
    window.addEventListener("load", () => setTimeout(hide, reduced ? 60 : 1900));
  }

  /* Scroll progress bar */
  function initNav() {
    const bar = $("#progress");
    if (!bar) return;
    let ticking = false;

    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();
  }

  /* Scroll reveal                                                    */
  function initReveal() {
    const items = $$(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* Project modal                                                    */
  function initModal() {
    const modal = $("#modal");
    const panel = $("#modal-content");
    const scrim = $("#modal-scrim");
    const closeBtn = $("#modal-close");
    let lastFocus = null;

    function open(id) {
      const p = D.projects.find((x) => x.id === id);
      if (!p) return;
      panel.innerHTML = window.Render.projectModalHTML(p);
      lastFocus = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      panel.parentElement.scrollTop = 0;
      closeBtn.focus();
    }

    function close() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    window.openProject = open;

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-open");
      if (btn) {
        e.preventDefault();
        open(btn.dataset.id);
        return;
      }
      const card = e.target.closest(".project");
      if (card && !e.target.closest("a")) {
        open(card.dataset.project);
      }
    });

    scrim.addEventListener("click", close);
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) close();
      if (e.key === "Tab" && modal.classList.contains("open")) {
        const f = $$('a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])', modal)
          .filter((el) => el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* Cursor-following glow on project cards                           */
  function initProjectHoverGlow() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".project");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  }

  /* Contact form                                                     */
  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $("#form-status");
    const submit = $("#form-submit");

    const rules = {
      name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."),
      subject: (v) => (v.trim().length >= 3 ? "" : "Give the message a subject."),
      message: (v) => (v.trim().length >= 10 ? "" : "A little more detail, please - at least 10 characters."),
    };

    function validateField(input) {
      const rule = rules[input.name];
      if (!rule) return true;
      const msg = rule(input.value);
      const field = input.closest(".field");
      field.classList.toggle("invalid", !!msg);
      $(".field-error", field).textContent = msg;
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    }

    $$("input, textarea", form).forEach((el) => {
      el.addEventListener("blur", () => validateField(el));
      el.addEventListener("input", () => {
        if (el.closest(".field").classList.contains("invalid")) validateField(el);
      });
    });

    function say(kind, text) {
      status.className = "form-status show " + kind;
      status.textContent = text;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const inputs = $$("input, textarea", form);
      const ok = inputs.map(validateField).every(Boolean);
      if (!ok) {
        say("bad", "Some fields still need fixing.");
        const bad = $(".field.invalid input, .field.invalid textarea", form);
        if (bad) bad.focus();
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());

      if (!D.contact.formEndpoint) {
        const body = `${data.message}\n\n-\n${data.name}\n${data.email}`;
        window.location.href =
          `mailto:${D.contact.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
        say("ok", "Opening your email app with the message ready to send.");
        return;
      }

      submit.classList.add("is-loading");
      submit.innerHTML = '<span class="spinner"></span> Sending';
      status.className = "form-status";

      const payload = Object.assign({}, data, {
        from_name: data.name,
        replyto: data.email,
      });
      if (D.contact.formAccessKey) payload.access_key = D.contact.formAccessKey;

      try {
        const res = await fetch(D.contact.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || out.success === false) throw new Error(out.message || "send failed");
        say("ok", "Message sent - it's in my inbox. I'll reply within a day.");
        form.reset();
        $$(".field", form).forEach((f) => f.classList.remove("invalid"));
      } catch (err) {
        say("bad", `That didn't send. Email me directly at ${D.contact.email}.`);
      } finally {
        submit.classList.remove("is-loading");
        submit.innerHTML = "Send message " + window.Render.I.arrow;
      }
    });
  }

  /* Custom cursor                                                    */
  function initCursor() {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.innerWidth < 1025) return;

    const dot = $("#cursor");
    const ring = $("#cursor-ring");
    if (!dot || !ring) return;

    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;

    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      if (!document.body.classList.contains("cursor-live")) {
        rx = x; ry = y;
        document.body.classList.add("cursor-live");
      }
    }, { passive: true });

    (function loop() {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();

    document.addEventListener("mouseover", (e) => {
      const view = e.target.closest('[data-cursor="view"]');
      const hot = e.target.closest('a, button, [data-cursor="hot"], input, textarea');
      ring.classList.toggle("view", !!view && !e.target.closest("a, button"));
      ring.classList.toggle("hot", !!hot && !view);
    });
  }

  /* Hero mouse glow                                                  */
  function initGlow() {
    if (reduced) return;
    const glow = $("#glow");
    const hero = $("#hero");
    if (!glow || !hero) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, on = false;

    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!on) { on = true; cx = tx; cy = ty; glow.classList.add("on"); }
    }, { passive: true });

    hero.addEventListener("mouseleave", () => { on = false; glow.classList.remove("on"); });

    (function loop() {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(loop);
    })();
  }

  /* Terminal                                                         */
  function initTerminal() {
    const root = $("#terminal");
    if (!root || !window.TerminalKit) return;

    const term = window.TerminalKit.createTerminal(root, { instant: reduced });
    term.boot();

    $$(".term-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        term.run(chip.dataset.cmd);
        term.focus();
      });
    });
  }
})();

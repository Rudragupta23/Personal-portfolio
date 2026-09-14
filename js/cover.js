
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Load counter: 0.00 -> 1.00 while the preloader is up */
  function runCounter() {
    const el = $("#cover-count");
    if (!el) return;
    if (reduced) { el.textContent = "1.00"; return; }

    const start = performance.now();
    const dur = 2000;
    (function tick(now) {
      const v = Math.min((now - start) / dur, 1);
      el.textContent = v.toFixed(2);
      if (v < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* The tear - Restored to follow the mouse cursor */
  function initTear() {
    const cover = $("#cover");
    const reveal = $("#cover-reveal");
    const edge = $("#cover-edge");
    if (!cover || !reveal || !edge || reduced) return;

    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };
    let active = false;
    let idle = null;
    const touch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    function size() {
      const w = Math.min(window.innerWidth * (touch ? 0.78 : 0.52), 720);
      return { w, h: w * 0.78 };
    }

    function frame() {
      // ease toward the pointer so the shape trails slightly behind
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;

      const { w, h } = size();
      const left = current.x - w / 2;
      const top = current.y - h / 2;

      reveal.style.setProperty("--mw", w + "px");
      reveal.style.setProperty("--mh", h + "px");
      reveal.style.setProperty("--mx", left + "px");
      reveal.style.setProperty("--my", top + "px");

      edge.style.width = w + "px";
      edge.style.height = h + "px";
      edge.style.transform = `translate3d(${left}px, ${top}px, 0)`;

      requestAnimationFrame(frame);
    }

    function point(e) {
      const r = cover.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;

      if (!active) {
        active = true;
        current.x = target.x;
        current.y = target.y;
        cover.classList.add("is-tearing");
      }
      stopDrift();
    }

    function leave() {
      active = false;
      cover.classList.remove("is-tearing");
    }

    function startDrift() {
      if (!touch || idle) return;
      const r = cover.getBoundingClientRect();
      current.x = r.width * 0.5;
      current.y = r.height * 0.30;
      cover.classList.add("is-tearing");
      const t0 = performance.now();
      idle = setInterval(() => {
        const t = (performance.now() - t0) / 3600;
        target.x = r.width * (0.5 + Math.sin(t) * 0.28);
        target.y = r.height * (0.34 + Math.cos(t * 0.8) * 0.2);
      }, 60);
    }
    
    function stopDrift() {
      if (idle) { clearInterval(idle); idle = null; }
    }

    cover.addEventListener("pointermove", point);
    cover.addEventListener("pointerdown", point);
    cover.addEventListener("pointerleave", leave);
    requestAnimationFrame(frame);

    if (touch) setTimeout(startDrift, 900);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((es) => {
        es.forEach((e) => { if (!e.isIntersecting) stopDrift(); });
      }, { threshold: 0.15 }).observe(cover);
    }
  }

  /* Full-screen menu */
  function initMenu() {
    const menu = $("#menu");
    if (!menu) return;

    const open = () => {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      $$(".menu__item", menu).forEach((el, i) => {
        el.style.transitionDelay = 120 + i * 70 + "ms";
      });
      const first = $(".menu__close", menu);
      if (first) first.focus();
    };

    const close = () => {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      $$(".menu__item", menu).forEach((el) => { el.style.transitionDelay = "0ms"; });
    };

    window.openMenu = open;
    window.closeMenu = close;

    $$("[data-menu-open]").forEach((b) => b.addEventListener("click", open));
    $$("[data-menu-close]").forEach((b) => b.addEventListener("click", close));

    $$(".menu__item", menu).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.go;
        close();
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        }, 420);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) close();
    });
  }

  /* The header goes solid once the cover is behind us */
  function initHead() {
    const head = $("#site-head");
    const cover = $("#cover");
    if (!head) return;

    function check() {
      const edge = cover ? cover.offsetHeight - 90 : 40;
      head.classList.toggle("is-solid", window.scrollY > edge);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
  }

  /* Light / dark control inside the menu */
  function initTheme() {
    $$("[data-theme-set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.setTheme) window.setTheme(btn.dataset.themeSet);
      });
    });
    // reflect whatever app.js restored from localStorage
    const mode = document.documentElement.dataset.theme || "light";
    $$("[data-theme-set]").forEach((b) => {
      const on = b.dataset.themeSet === mode;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  function boot() {
    runCounter();
    initTear();
    initMenu();
    initHead();
    initTheme();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

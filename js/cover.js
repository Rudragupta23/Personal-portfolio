
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* preloader */
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


  function initTear() {
    const cover = $("#cover");
    const lens = $("#cover-lens");
    const inner = $("#cover-lens-inner");
    const edge = $("#cover-edge");
    const hint = $("#cover-hint");
    if (!cover || !lens || !inner || !edge || reduced) return;

    const touch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (touch && hint) hint.textContent = "Touch the portrait";

    const FOLLOW = 11;      
    const STIFF = 150;      
    const DAMP = 17;          

    let D = 560;            
    const pointer = { cx: 0, cy: 0 };
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let scale = 0, vel = 0, scaleTo = 0;
    let active = false, drifting = false, visible = true;
    let running = false, last = 0, driftT0 = 0, driftTimer = null;

    function measure() {
      const vw = cover.clientWidth;
      D = touch ? Math.min(vw * 0.92, 520) : Math.min(Math.max(vw * 0.42, 380), 820);
      lens.style.setProperty("--d", D + "px");
      edge.style.setProperty("--d", D + "px");
      inner.style.setProperty("--cw", cover.clientWidth + "px");
      inner.style.setProperty("--ch", cover.clientHeight + "px");
    }

    function toLocal() {
      const r = cover.getBoundingClientRect();
      target.x = pointer.cx - r.left;
      target.y = pointer.cy - r.top;
    }

    function wake() {
      if (running) return;
      running = true;
      last = performance.now();
      requestAnimationFrame(frame);
    }

    function render() {
      const s = Math.max(scale, 0.0001);
      const px = cur.x - (D * s) / 2;
      const py = cur.y - (D * s) / 2;
      const t = `translate3d(${px.toFixed(2)}px, ${py.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
      lens.style.transform = t;
      edge.style.transform = t;
      inner.style.transform =
        `scale(${(1 / s).toFixed(4)}) translate3d(${(-px).toFixed(2)}px, ${(-py).toFixed(2)}px, 0)`;
      cover.classList.toggle("is-tearing", scale > 0.004);
    }

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 1 / 20);
      last = now;

      if (drifting) {
        const r = cover.getBoundingClientRect();
        const t = (now - driftT0) / 3200;
        target.x = r.width * (0.5 + Math.sin(t) * 0.26);
        target.y = r.height * (0.32 + Math.cos(t * 0.8) * 0.16);
      }

      const k = 1 - Math.exp(-FOLLOW * dt);
      cur.x += (target.x - cur.x) * k;
      cur.y += (target.y - cur.y) * k;

      const steps = Math.ceil(dt / (1 / 120));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        vel += (scaleTo - scale) * STIFF * h;
        vel *= Math.exp(-DAMP * h);
        scale += vel * h;
      }
      if (scaleTo === 0 && scale < 0) { scale = 0; vel = 0; }

      render();

      const settled =
        !active && !drifting && scale < 0.002 && Math.abs(vel) < 0.01;
      if (settled) {
        scale = 0; vel = 0; render();
        running = false;
        return;
      }
      requestAnimationFrame(frame);
    }

    function point(e) {
      if (!visible) return;
      pointer.cx = e.clientX;
      pointer.cy = e.clientY;
      toLocal();
      stopDrift();
      if (!active) {
        active = true;
        if (scale < 0.05) { cur.x = target.x; cur.y = target.y; }
        cover.classList.add("has-hovered");
      }
      scaleTo = 1;
      wake();
    }

    function leave() {
      active = false;
      scaleTo = 0;
      wake();
      if (touch) {
        clearTimeout(driftTimer);
        driftTimer = setTimeout(startDrift, 1600);
      }
    }

    function startDrift() {
      if (!touch || drifting || active || !visible) return;
      drifting = true;
      driftT0 = performance.now();
      const r = cover.getBoundingClientRect();
      if (scale < 0.05) { cur.x = r.width * 0.5; cur.y = r.height * 0.32; }
      scaleTo = 1;
      wake();
    }

    function stopDrift() {
      clearTimeout(driftTimer);
      if (drifting) { drifting = false; }
    }

    measure();
    render();

    cover.addEventListener("pointermove", point, { passive: true });
    cover.addEventListener("pointerdown", point, { passive: true });
    cover.addEventListener("pointerleave", leave);
    cover.addEventListener("pointercancel", leave);

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", () => { if (active) toLocal(); }, { passive: true });

    if (touch) driftTimer = setTimeout(startDrift, 900);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((es) => {
        es.forEach((e) => {
          visible = e.isIntersecting;
          if (!visible) {
            stopDrift();
            active = false; scaleTo = 0; wake();
          } else if (touch) {
            clearTimeout(driftTimer);
            driftTimer = setTimeout(startDrift, 600);
          }
        });
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

  function initTheme() {
    $$("[data-theme-set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.setTheme) window.setTheme(btn.dataset.themeSet);
      });
    });
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

/* =====================================================================
   TERMINAL - a real, working command line.
   Commands: help whoami skills projects experience education certs
             status contact socials leetcode github resume open
             ls date theme banner clear secret sudo
   ===================================================================== */

(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const OS_VERSION = "4.0.0";

  /* ---------------------------------------------------------------- */
  /* Small helpers                                                    */
  /* ---------------------------------------------------------------- */
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const link = (url, label) =>
    `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label || url)}</a>`;

  const pad = (s, n) => esc(s) + " ".repeat(Math.max(0, n - String(s).length));

  /* ---------------------------------------------------------------- */
  /* Command implementations. Each returns an array of output lines:  */
  /*   { cls: "out", html: "..." }  |  { cls: "spacer" }              */
  /* ---------------------------------------------------------------- */
  const SP = { cls: "spacer", html: "" };
  const line = (html, cls) => ({ cls: cls || "out", html });

  const COMMANDS = {
    help: {
      desc: "list every available command",
      run() {
        const names = Object.keys(COMMANDS).filter((c) => !COMMANDS[c].hidden);
        const out = [line("Available commands:", "head")];
        names.forEach((n) => {
          out.push(line(`  <span class="dimx">${pad(n, 12)}</span>${esc(COMMANDS[n].desc)}`, "dim"));
        });
        out.push(SP);
        out.push(line("Tip: press Tab to complete, ↑ / ↓ for history.", "dim"));
        return out;
      },
    },

    whoami: {
      desc: "who is behind this site",
      run() {
        return [
          line(esc(D.person.name), "head"),
          line(esc(D.person.role) + " · " + esc(D.person.location), "dim"),
          SP,
          line(esc(D.person.intro)),
          SP,
          line("Education: B.Tech Computer Science & Engineering, VIT (Sep 2023 - May 2027)", "dim"),
          line("CGPA: 9.15 / 10.0", "dim"),
        ];
      },
    },

    skills: {
      desc: "the stack I actually work in",
      run() {
        const out = [line("Technical skills", "head"), SP];
        D.skills.forEach((cat) => {
          out.push(line(pad(cat.category + ":", 22) + esc(cat.items.map((i) => i.name).join(", ")), "out"));
        });
        out.push(SP);
        out.push(line("Run 'projects' to see where each of these got used.", "dim"));
        return out;
      },
    },

    projects: {
      desc: "everything I've shipped",
      run() {
        const out = [line("Selected projects", "head"), SP];
        D.projects.forEach((p, i) => {
          out.push(line(`[${i + 1}] ${esc(p.name)}  <span class="dimx">(${esc(p.year)})</span>`, "good"));
          out.push(line("    " + esc(p.tagline), "dim"));
          out.push(line("    " + esc(p.stack.join(" · ")), "dim"));
          const bits = [];
          if (p.links.live) bits.push(link(p.links.live, "live demo"));
          if (p.links.code) bits.push(link(p.links.code, "source"));
          if (bits.length) out.push(line("    " + bits.join("  ·  "), "dim"));
          out.push(SP);
        });
        out.push(line("Run 'open 1' (or any number) to read the full case study.", "dim"));
        return out;
      },
    },

    open: {
      desc: "open a project case study - e.g. open 2",
      run(args) {
        const n = parseInt(args[0], 10);
        if (!n || n < 1 || n > D.projects.length) {
          return [
            line(`open: pick a number between 1 and ${D.projects.length}.`, "err"),
            line("Run 'projects' to see the list.", "dim"),
          ];
        }
        const p = D.projects[n - 1];
        setTimeout(() => {
          if (window.openProject) window.openProject(p.id);
        }, 260);
        return [line(`Opening ${esc(p.name)}…`, "good")];
      },
    },

    experience: {
      desc: "where I'm working",
      run() {
        const out = [];
        D.experience.forEach((e) => {
          out.push(line(esc(e.role), "head"));
          out.push(line(esc(e.company) + " - " + esc(e.location), "good"));
          out.push(line(esc(e.period), "dim"));
          out.push(SP);
          out.push(line(esc(e.summary)));
          out.push(SP);
          out.push(line("Stack: " + esc(e.stack.join(", ")), "dim"));
        });
        return out;
      },
    },

    education: {
      desc: "degree and CGPA",
      run() {
        return [
          line("Vellore Institute of Technology", "head"),
          line("B.Tech, Computer Science and Engineering", "out"),
          line("Sep 2023 - May 2027  ·  CGPA 9.15 / 10.0", "dim"),
        ];
      },
    },

    certs: {
      desc: "certifications",
      run() {
        const out = [line("Certifications", "head"), SP];
        D.certifications.forEach((c) => {
          out.push(line(esc(c.name), "good"));
          out.push(line("    " + esc(c.issuer) + ", " + esc(c.year), "dim"));
        });
        return out;
      },
    },

    status: {
      desc: "current availability",
      run() {
        return [
          line("● " + esc(D.person.availableLabel), "good"),
          SP,
          line(pad("role", 14) + "open to internships and full-time SDE roles", "dim"),
          line(pad("graduating", 14) + "May 2027", "dim"),
          line(pad("location", 14) + esc(D.person.location), "dim"),
          line(pad("notice", 14) + "immediate for internships", "dim"),
          SP,
          line("Run 'contact' to get in touch.", "dim"),
        ];
      },
    },

    contact: {
      desc: "how to reach me",
      run() {
        return [
          line("Get in touch", "head"),
          SP,
          line(pad("email", 12) + link("mailto:" + D.contact.email, D.contact.email)),
          line(pad("phone", 12) + esc(D.contact.phone)),
          line(pad("linkedin", 12) + link("https://linkedin.com/in/rudrag23", "linkedin.com/in/rudrag23")),
          line(pad("github", 12) + link("https://github.com/Rudragupta23", "github.com/Rudragupta23")),
          SP,
          line("I reply within a day.", "dim"),
        ];
      },
    },

    socials: {
      desc: "every profile in one place",
      run() {
        const out = [line("Profiles", "head"), SP];
        D.socials.forEach((s) => {
          out.push(line(pad(s.label.toLowerCase(), 12) + link(s.url, s.handle)));
        });
        return out;
      },
    },

    leetcode: {
      desc: "open my LeetCode profile",
      run() {
        const url = "https://leetcode.com/u/Rudragupta23/";
        setTimeout(() => window.open(url, "_blank", "noopener"), 400);
        return [
          line("Data structures and algorithms practice lives here:", "dim"),
          line(link(url, url)),
          SP,
          line("Opening in a new tab…", "good"),
        ];
      },
    },

    github: {
      desc: "open my GitHub profile",
      run() {
        const url = "https://github.com/Rudragupta23";
        setTimeout(() => window.open(url, "_blank", "noopener"), 400);
        return [line(link(url, url)), line("Opening in a new tab…", "good")];
      },
    },

    resume: {
      desc: "download my resume",
      run() {
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = D.resume.file;
          a.download = "Rudra-Gupta-Resume.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
        }, 400);
        return [
          line("Rudra-Gupta-Resume.pdf", "good"),
          line("Starting download…", "dim"),
        ];
      },
    },

    ls: {
      desc: "list the sections of this site",
      run() {
        const s = [
          "about/", "journey/", "skills/", "projects/", "experience/",
          "certifications/", "foundations/", "activity/", "resume.pdf", "contact/",
        ];
        return [line(s.map((x) => `<span class="dimx">${esc(x)}</span>`).join("   "), "out")];
      },
    },

    theme: {
      desc: "switch between light and dark",
      run() {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTimeout(() => window.setTheme && window.setTheme(next), 120);
        return [line(`Switching to ${next} mode.`, "good")];
      },
    },

    date: {
      desc: "the time where I am",
      run() {
        return [line(esc(new Date().toString()), "dim")];
      },
    },

    banner: {
      desc: "print the header again",
      run() {
        return bootLines();
      },
    },

    clear: {
      desc: "clear the screen",
      run() {
        return "CLEAR";
      },
    },

    secret: {
      desc: "there's something here",
      run() {
        return [
          line("You typed the one command nobody asks about. Respect.", "head"),
          SP,
          line("Three things the resume doesn't say:", "out"),
          line("  1. I shoot photographs. The camera goes wherever I hike.", "dim"),
          line("  2. The concurrency bug in the booking system took four days.", "dim"),
          line("     Ten users, one slot, nine polite rejections. Worth it.", "dim"),
          line("  3. This terminal is not a screenshot. You already knew that.", "dim"),
          SP,
          line("Now go run 'projects'.", "good"),
        ];
      },
      hidden: true,
    },

    sudo: {
      desc: "nice try",
      hidden: true,
      run() {
        return [
          line("Permission denied: you are not in the sudoers file.", "err"),
          line("This incident has been reported. (It hasn't.)", "dim"),
        ];
      },
    },

    exit: {
      desc: "leave the terminal",
      hidden: true,
      run() {
        return [line("There's no exit. Scroll instead - the rest of the site is below.", "dim")];
      },
    },
  };

  /* ---------------------------------------------------------------- */
  /* Boot sequence                                                    */
  /* ---------------------------------------------------------------- */
  function bootLines() {
    return [
      line(`Initializing RudraOS v${OS_VERSION}...`, "boot"),
      line("[OK] Neural Cores Linked", "ok"),
      line("[OK] Identity Matrix Loaded", "ok"),
      line("Type 'help' to see available commands.", "hint"),
    ];
  }

  /* ---------------------------------------------------------------- */
  /* Terminal instance                                                */
  /* ---------------------------------------------------------------- */
  function createTerminal(root, opts) {
    opts = opts || {};
    const body = root.querySelector(".term-body");
    const input = root.querySelector(".term-input");
    const promptRow = root.querySelector(".term-prompt-row");

    const history = [];
    let hIndex = -1;
    let busy = false;

    function scroll() {
      body.scrollTop = body.scrollHeight;
    }

    function push(l) {
      const el = document.createElement("div");
      el.className = "term-line " + (l.cls || "out");
      el.innerHTML = l.html || "";
      body.appendChild(el);
      scroll();
      return el;
    }

    function pushAll(lines, stagger) {
      if (!stagger) {
        lines.forEach(push);
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        let i = 0;
        (function step() {
          if (i >= lines.length) return resolve();
          push(lines[i++]);
          setTimeout(step, stagger);
        })();
      });
    }

    function echo(cmd) {
      push({
        cls: "echo",
        html: `rudra@system:~$ <em>${esc(cmd)}</em>`,
      });
    }

    function run(raw) {
      const cmd = String(raw || "").trim();
      if (!cmd) {
        echo("");
        return;
      }
      echo(cmd);
      history.unshift(cmd);
      hIndex = -1;

      const parts = cmd.split(/\s+/);
      const name = parts[0].toLowerCase();
      const args = parts.slice(1);
      const entry = COMMANDS[name];

      if (!entry) {
        push(line(`command not found: ${esc(name)}`, "err"));
        const near = Object.keys(COMMANDS).find((c) => c.startsWith(name[0]));
        push(line(near ? `Did you mean '${near}'? Type 'help' for the full list.` : "Type 'help' for the full list.", "dim"));
        push(SP);
        return;
      }

      const out = entry.run(args);
      if (out === "CLEAR") {
        body.innerHTML = "";
        return;
      }
      pushAll(out, 0);
      push(SP);
    }

    /* ---- input handling ---- */
    input.addEventListener("keydown", (e) => {
      if (busy) return;

      if (e.key === "Enter") {
        e.preventDefault();
        const v = input.value;
        input.value = "";
        run(v);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (hIndex < history.length - 1) hIndex++;
        input.value = history[hIndex] || "";
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (hIndex > 0) hIndex--;
        else { hIndex = -1; input.value = ""; return; }
        input.value = history[hIndex] || "";
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const v = input.value.trim().toLowerCase();
        if (!v) return;
        const match = Object.keys(COMMANDS).filter((c) => c.startsWith(v));
        if (match.length === 1) input.value = match[0] + " ";
        else if (match.length > 1) {
          echo(v);
          push(line(match.join("   "), "dim"));
          push(SP);
        }
        return;
      }

      if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        body.innerHTML = "";
      }
    });

    promptRow.addEventListener("click", () => input.focus());

    /* ---- boot ---- */
    function boot() {
      busy = true;
      pushAll(bootLines(), opts.instant ? 0 : 320).then(() => {
        busy = false;
        if (opts.autofocus !== false && window.innerWidth > 980) {
          // Focus without yanking the page around on load.
          input.focus({ preventScroll: true });
        }
      });
    }

    return { run, boot, focus: () => input.focus({ preventScroll: true }) };
  }

  window.TerminalKit = { createTerminal, COMMANDS };
})();

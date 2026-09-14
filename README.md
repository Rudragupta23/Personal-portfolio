# Rudra Gupta - Developer Portfolio

A hand-built portfolio site. No framework, no build step, no template.
Open `index.html` in a browser and it runs.

---

## Run it

**Easiest:** double-click `index.html`.

**Better (so the resume download and fonts behave exactly as they will live):**

```bash
cd rudra-portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Everything you edit lives in one file

`js/data.js`

Your name, headline, skills, projects, experience, certifications, links -
all of it. The HTML never contains your personal information, so you never
have to hunt through markup to change a sentence.

### One optional extra

`certifications[].credentialUrl` - paste a verification link and a
**Verify** button appears on that card. Left empty, no link is shown.
Nothing fake is ever displayed.

Everything else is wired: all eight certifications, all four projects with
their live URLs and repos, and a working contact form.

---

## The contact form is live

It posts to **Web3Forms** using the access key in `js/data.js`:

```js
contact: {
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "0b1e68ec-80de-43c6-b093-afa63e79425d",
}
```

Messages land in the inbox that key is registered to. Validation, loading,
success and error states are all handled, and there's a hidden `botcheck`
honeypot field that Web3Forms uses to drop spam. To send somewhere else,
get a new key at [web3forms.com](https://web3forms.com) and swap that one line.

---

## The terminal

The hero terminal is a real command line, not an animation. Try:

```
help        every available command
whoami      who you are
skills      the stack, by category
projects    numbered list with links
open 2      opens that project's case study modal
experience  current role
education   degree and CGPA
certs       certifications
status      availability
contact     email, phone, socials
socials     every profile
leetcode    opens your LeetCode profile
github      opens your GitHub profile
resume      downloads the PDF
ls          site sections
theme       toggle light / dark
banner      reprint the boot header
date        current time
clear       wipe the screen
secret      (there's something here)
```

Plus **Tab** to autocomplete, **↑ / ↓** for command history, and **Ctrl+L** to clear.

The terminal stays a fixed height no matter how much output you generate -
long results scroll inside it rather than stretching the page.

Commands live in `js/terminal.js` inside the `COMMANDS` object. To add one:

```js
myCommand: {
  desc: "shows up in help",
  run() {
    return [line("Hello", "head"), line("More text", "dim")];
  },
},
```

Line styles available: `head` `out` `dim` `good` `err` `boot` `ok` `hint`.

---

## File map

```
rudra-portfolio/
├── index.html              semantic shell - sections render into it
├── css/
│   ├── base.css            design tokens, type scale, light + dark themes
│   ├── components.css      nav, buttons, cards, terminal, modal, form, cursor
│   └── sections.css        per-section layout + all responsive breakpoints
├── js/
│   ├── data.js             ← YOUR CONTENT. Edit this.
│   ├── terminal.js         the command line
│   ├── render.js           builds every section from data.js
│   └── app.js              nav, scrollspy, theme, reveals, modal, form, cursor
└── assets/
    ├── img/                portrait, favicon, resume preview
    │   └── projects/       the four project screenshots
    └── resume/             Rudra-Gupta-Resume.pdf
```

To swap your resume: replace the PDF at `assets/resume/` keeping the same
filename, or update `resume.file` in `js/data.js`.

---

## Deploying

### Netlify (simplest - no account setup needed to try)
Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
`rudra-portfolio` folder onto the page. Live in about ten seconds.

### Vercel
```bash
npm i -g vercel
cd rudra-portfolio
vercel
```
Accept the defaults. It's a static site, so there's no build command.

### GitHub Pages
1. Push this folder to a repo.
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Live at `https://rudragupta23.github.io/<repo>`.

### Your own domain (rudraguptaportfolio.live)
Point the domain at whichever host above, then update `seo.url` in
`js/data.js` and the `og:url` / `canonical` tags in `index.html`.

---

## What's built in

- **Light and dark themes** with the orange identity intact in both, saved to `localStorage`.
- **Live GitHub stats** - repo count, followers and join year are fetched from the public GitHub API at load. If the request fails the card degrades quietly instead of showing wrong numbers.
- **Real project screenshots**, framed as browser windows showing each project's live domain. Swap an image by replacing the file in `assets/img/projects/` and updating `image` in `js/data.js`. Any project without an `image` falls back to hand-drawn inline SVG artwork.
- **Accessibility** - semantic landmarks, skip link, visible focus rings, ARIA labels, a focus trap in the modal, keyboard-operable everything, and full `prefers-reduced-motion` support.
- **SEO** - title, description, Open Graph, Twitter card, canonical link, and JSON-LD `Person` structured data.
- **Performance** - zero dependencies, ~40KB of CSS and JS uncompressed, lazy-loaded images, one Google Fonts request.
- **Responsive** from 320px to 1920px, verified with no horizontal overflow.

---

## Images

| File | Used for |
|---|---|
| `assets/img/rudra-bengaluru.jpg` | About section portrait |
| `assets/img/projects/*.jpg` | Project cards |
| `assets/img/resume-preview.jpg` | Resume section preview |
| `assets/resume/Rudra-Gupta-Resume.pdf` | The actual download |

If you update your resume, replace **both** the PDF and
`resume-preview.jpg` so the preview matches the file.

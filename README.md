# Rudra Gupta - Personal Portfolio

My personal portfolio website. It shows who I am, my skills, projects, work experience and certifications.

**Live site:** [rudraguptaportfolio.live](https://rudraguptaportfolio.live)

Built from scratch with plain **HTML, CSS and JavaScript**. No frameworks and no build step.

---

## Features

- **Interactive cover.** Move your mouse over the portrait and a torn-paper circle follows it, revealing a second photo with the word *PORTFOLIO* behind my head. On phones, the circle drifts by itself.
- **Working terminal.** Type commands like `help`, `whoami`, `skills` or `projects` to explore the site.
- **Skills cards.** Tools are grouped into four cards. Hover or tap a skill to see where I used it.
- **Project case studies.** Click any project to open a pop-up with the problem, solution, features, architecture and what I learned.
- **Certifications with a viewer page.** Hover a certificate to preview it, then click the eye button to open it on its own page with details, a PDF download and verification links.
- **Light and dark mode.** Your choice is saved for your next visit.
- **Working contact form.** Messages are sent straight to my inbox using Web3Forms.
- **Live GitHub stats.** Repository and follower counts load from the GitHub API.
- **Responsive and accessible.** Works on phones, tablets and desktops, supports keyboard navigation, and respects the "reduce motion" setting.

---

## Tech used

| Area | Tools |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, masks) |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts: Plus Jakarta Sans, Inter, JetBrains Mono, Playfair Display, Archivo Black, Dancing Script |
| Contact form | [Web3Forms](https://web3forms.com) |
| Live stats | GitHub REST API |

---

## Project structure

```
Personal-portfolio/
├── index.html              Main page
├── certificate.html        Certificate viewer page
├── README.md
│
├── css/
│   ├── base.css            Colours, fonts, spacing, light/dark themes
│   ├── components.css      Buttons, terminal, modal, form, cursor
│   ├── sections.css        Styles for each section of the main page
│   ├── cover.css           Cover, header and full-screen menu
│   └── certificate.css     Certificate viewer page
│
├── js/
│   ├── data.js             ALL site content lives here
│   ├── render.js           Builds the sections from data.js
│   ├── app.js              Theme, modal, form, scroll effects, cursor
│   ├── cover.js            Cover reveal, menu and header
│   ├── terminal.js         Terminal commands
│   └── certificate.js      Certificate viewer logic
│
└── assets/
    ├── img/
    │   ├── cover/          Cover photos, cut-out and circle mask/edge
    │   ├── projects/       Project screenshots
    │   ├── certificates/   Certificate images and previews
    │   ├── favicon.svg
    │   ├── resume-preview.jpg
    │   └── rudra-bengaluru.jpg
    ├── certificates/       Original certificate PDFs
    └── resume/
        └── Rudra-Gupta-Resume.pdf
```

---

## Run it locally

No installation is needed.

**Option 1:** Open `index.html` directly in your browser.

**Option 2 (recommended):** Run a small local server so everything works exactly like the live site.

```bash
# clone the repository
git clone https://github.com/Rudragupta23/Personal-portfolio.git
cd Personal-portfolio

# start a local server (pick one)
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

---

## Terminal commands

| Command | What it does |
|---|---|
| `help` | List all commands |
| `whoami` | Short introduction |
| `skills` | Technical skills |
| `projects` | List of projects |
| `open 1` | Open a project case study by number |
| `experience` | Work experience |
| `education` | Degree and CGPA |
| `certs` | Certifications with links |
| `status` | Current availability |
| `contact` | Contact details |
| `socials` | All profiles |
| `github` / `leetcode` | Open my profiles |
| `resume` | Download my resume |
| `theme` | Switch light / dark mode |
| `clear` | Clear the screen |

**Tips:** press `Tab` to autocomplete and `↑` / `↓` to go through past commands. There's also a hidden command to find.

---

## Deployment

This is a static site, so it can be hosted anywhere that serves HTML files, such as GitHub Pages, Netlify or Vercel. Upload the whole folder with no build step.

---

## Contact

- **Email:** [23rudragupta@gmail.com](mailto:23rudragupta@gmail.com)
- **LinkedIn:** [linkedin.com/in/rudrag23](https://linkedin.com/in/rudrag23)
- **GitHub:** [github.com/Rudragupta23](https://github.com/Rudragupta23)
- **LeetCode:** [leetcode.com/u/Rudragupta23](https://leetcode.com/u/Rudragupta23/)

---

© Rudra Gupta. Designed and built from scratch. The code is here to learn from, but please don't reuse my photos, certificates or personal content.
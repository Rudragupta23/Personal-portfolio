# Rudra Gupta - Personal Portfolio

A dynamic, fully responsive personal portfolio website showcasing full-stack development projects, technical skills, and professional experience. The platform features a unique, interactive command-line terminal, a custom dark/light theme toggle, and a data-driven rendering architecture built entirely with Vanilla JavaScript, HTML5, and CSS3. 

**Live URL:** [https://rudraguptaportfolio.live/](https://rudraguptaportfolio.live/)

---

## 🚀 Core Features

* **Interactive Terminal (RudraOS v4.0.0):** A fully functional command-line interface embedded in the hero section. Users can type commands like `whoami`, `projects`, `skills`, `clear`, and `secret` to explore the portfolio through a developer-centric lens.
* **Data-Driven Architecture:** The entire portfolio's content (projects, skills, experience, and contact details) is decoupled from the UI. The `data.js` file acts as a local CMS, which is injected into the DOM at runtime via `render.js`.
* **Live GitHub Statistics:** Automatically fetches and displays real-time GitHub repository and follower counts using the public GitHub API.
* **Theming & Accessibility:** Includes a seamless dark/light mode toggle managed by CSS variables and preserved via `localStorage`. The site also respects `prefers-reduced-motion` system settings for animations.
* **Functional Contact Form:** Integrates with the Web3Forms API to process contact submissions and send them directly to the author's inbox, complete with client-side validation.
* **Custom Interactions:** Features custom cursor tracking for desktop users and scroll-triggered reveal animations utilizing the `IntersectionObserver` API.

---

## 🛠️ Built With (Portfolio Tech Stack)

Unlike the full-stack projects featured within it, this portfolio is built deliberately without heavy frameworks to ensure maximum performance and complete control over the UI/UX:

* **HTML5:** Semantic markup with strict accessibility considerations and ARIA attributes.
* **CSS3:** Built entirely with custom CSS. Utilizes native CSS variables for the light/dark theme system, CSS Grid/Flexbox for responsive layouts, and pure CSS for keyframe animations (like the terminal cursor and preloader).
* **Vanilla JavaScript (ES6+):** Uses modern browser APIs like `IntersectionObserver` for scroll reveals, `matchMedia` for hover/pointer detection, and dynamic DOM manipulation to inject content.
* **Web3Forms API:** Handles the serverless contact form submissions without requiring a backend.

---

## 💻 Terminal Commands Reference

The hero section features a custom-built, interactive command-line interface. Visitors can explore the portfolio using the following commands:

* `help` - Lists all available commands.
* `whoami` - Displays author introduction and education details.
* `skills` - Outputs the technical stack categorized by domain.
* `projects` - Lists all shipped projects. Use `open <number>` (e.g., `open 1`) to launch the full case study modal for a specific project.
* `experience` - Details current and past professional roles.
* `education` - Displays degree and university details.
* `certs` - Lists professional certifications.
* `status` - Shows current availability for internships or full-time roles.
* `contact` / `socials` - Provides email, phone, and links to GitHub, LinkedIn, and LeetCode.
* `leetcode` / `github` - Opens the respective profiles in a new tab.
* `resume` - Triggers a direct download of the PDF resume.
* `theme` - Toggles the site between light and dark modes.
* `ls` - Lists the conceptual sections of the site.
* `date` - Outputs the current local time.
* `banner` - Prints the boot header again.
* `clear` - Clears the terminal screen.
* *Secret commands are also hidden within the source code for curious developers to find.*

---

## 🏗️ Featured Projects Built & Showcased

The portfolio highlights several full-stack applications built by the author:

* **MathCom Mentors:** A multi-role learning platform for a London-based client, featuring isolated dashboards for admins, graders, students, and parents (React, Node.js, MongoDB, AWS S3).
* **Pahal Foundation:** An NGO management system digitizing admissions, attendance, and Razorpay-verified donations (Django, Python, AWS S3).
* **Healthcare Appointment Manager:** A clinic booking system featuring concurrency control and AI triage via the Gemini API, alongside Google Calendar synchronization (React, Node, Express, MongoDB).
* **Yatra Saral:** An accessible train travel booking system tailored for elderly and low-literacy users (React, TypeScript, Node.js, Express, MongoDB).

---

## 📁 Codebase Structure

The project is structured without complex build tools, relying on clean, modular vanilla web technologies:

* **`/index.html`**: The semantic skeleton of the application, establishing the layout, meta tags for SEO, and mounting points for dynamic content.
* **`/css/`**: Modular stylesheet architecture.
  * `base.css`: CSS variables (light/dark tokens), typography resets, and global layout primitives.
  * `components.css`: Styling for reusable UI elements like buttons, navbars, modals, the custom cursor, and the terminal.
  * `sections.css`: Specific grid layouts and styling for individual page sections (Hero, About, Projects, Experience, etc.).
* **`/js/`**: Separation of concerns for logic and content.
  * `data.js`: The centralized data object (`PORTFOLIO`) containing all personal details, project metrics, and configuration.
  * `render.js`: DOM generation functions that map data from `data.js` into HTML structures and inject JSON-LD.
  * `terminal.js`: The CLI engine parsing user input, managing history, and executing commands.
  * `app.js`: Core initialization, event listeners, form validation, theme toggling, and scroll tracking.
* **`/assets/`**: Contains images, favicons, and the downloadable PDF resume.

---

## ⚡ Performance & SEO Features

* **Dynamic JSON-LD:** The `render.js` script automatically generates and injects Schema.org structured data (JSON-LD) into the document `<head>` to improve search engine understanding of the author's identity and alumni status.
* **Lazy Loading:** All project images utilize `loading="lazy"` and `decoding="async"` attributes to ensure the initial page load is fast and efficient.
* **Reduced Motion Support:** The `app.js` and `base.css` files actively check for the user's `prefers-reduced-motion` OS setting. If enabled, the site disables custom cursor tracking, disables scroll reveals, and instantly resolves the preloader.

---

## ⚙️ How to Customize (For Forkers)

The architecture of this portfolio separates the content entirely from the rendering logic, making it incredibly easy to adapt for your own use. 

1. **Edit the Data:** Open `js/data.js`. This file acts as the single source of truth. Update the `PORTFOLIO` object with your own name, bio, skills, projects, and experience. The site will automatically generate the UI based on this data.
2. **Configure the Contact Form:** In `data.js`, locate the `contact` object. Generate a free API key from [Web3Forms](https://web3forms.com) and replace the `formAccessKey` string so messages route to your email. If left blank, the form gracefully falls back to opening the user's default `mailto:` client.
3. **Update Assets:** Replace the images in the `assets/img/` directory and subdirectories, and drop your own PDF resume into `assets/resume/`.
4. **Tweak the Theme:** Open `css/base.css` and adjust the `--o` (orange) and background color variables under the `:root` and `[data-theme="dark"]` selectors to match your personal branding.

---

## 💻 Local Setup

1. Clone the repository to your local machine.
2. No package manager (`npm`/`yarn`) or build step is required. 
3. Open `index.html` directly in any modern web browser, or serve it via a local development server (e.g., VS Code Live Server) to ensure local API fetches (like the GitHub stats) run smoothly without CORS restrictions.

---

## 👤 Author

**Rudra Gupta**
* Full Stack Developer & B.Tech CSE Undergraduate at Vellore Institute of Technology
* **GitHub:** [@Rudragupta23](https://github.com/Rudragupta23)
* **LinkedIn:** [rudrag23](https://linkedin.com/in/rudrag23)
* **LeetCode:** [Rudragupta23](https://leetcode.com/u/Rudragupta23/)
* **Email:** [23rudragupta@gmail.com](mailto:23rudragupta@gmail.com)
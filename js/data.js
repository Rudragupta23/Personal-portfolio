

const PORTFOLIO = {
  /* 1. IDENTITY */
  person: {
    name: "Rudra Gupta",
    initials: "RG",
    role: "Full Stack Developer",
    eyebrow: "Full-Stack Developer & Tech Enthusiast",
    location: "India · Open to remote & relocation",
    available: true,
    availableLabel: "Available for opportunities",

    headlineLine1: "I build web products",
    headlineLine2: "that {actually ship}.",

          intro:
      "I'm a full stack developer and a Computer Science student at VIT. I build websites and web apps, from the pages people see to the code and database behind them.",

    photo: "assets/img/rudra-bengaluru.jpg",
    photoAlt: "Rudra Gupta standing on a rooftop in Bengaluru",
  },

  contact: {
    email: "23rudragupta@gmail.com",
    phone: "+91 98968 00458",
    portfolio: "https://rudraguptaportfolio.live",
    heading: "Let's build something together.",
    subheading:
      "I'm always open to internships, full-time roles and side projects worth staying up for. The fastest way to reach me is email and I reply within a day.",

    // Web3Forms
    formEndpoint: "https://api.web3forms.com/submit",
    formAccessKey: "0b1e68ec-80de-43c6-b093-afa63e79425d",
  },

  socials: [
    { id: "github",   label: "GitHub",   handle: "Rudragupta23", url: "https://github.com/Rudragupta23" },
    { id: "linkedin", label: "LinkedIn", handle: "rudrag23",     url: "https://linkedin.com/in/rudrag23" },
    { id: "leetcode", label: "LeetCode", handle: "Rudragupta23", url: "https://leetcode.com/u/Rudragupta23/" },
    { id: "email",    label: "Email",    handle: "23rudragupta@gmail.com", url: "mailto:23rudragupta@gmail.com" },
    { id: "instagram", label: "Instagram", handle: "@rud.ra_23", url: "https://www.instagram.com/rud.ra_23/", footerOnly: true },
    { id: "youtube",   label: "YouTube",   handle: "@rudrag05",  url: "https://www.youtube.com/@rudrag05",   footerOnly: true },
  ],

  resume: {
    file: "assets/resume/Rudra-Gupta-Resume.pdf",
    updated: "2026",
    heading: "Want the full picture?",
    text: "One page, no filler: experience, projects, education and the exact stack behind each of them.",
  },

  /* 2. RECRUITER SNAPSHOT */
  snapshot: [
    { value: "9.15", unit: "/10", label: "CGPA", note: "B.Tech CSE, VIT" },
    { value: "2027", unit: "",    label: "Graduating", note: "Sep 2023 - May 2027" },
    { value: "15+",    unit: "",    label: "Projects", note: "Personal and internships" },
    { value: "7",    unit: "",    label: "Certifications", note: "NPTEL, Oracle, Cisco, AWS, Google" },
  ],

  /* 3. ABOUT                                                         */
  about: {
        paragraphs: [
      "I'm a final-year Computer Science student at Vellore Institute of Technology (VIT) with a 9.15 CGPA. I'm a full stack developer, which means I work on both parts of a website: the pages people see and the code and database behind them. I mostly use React, Node.js, Express, Django, MongoDB, MySQL and AWS.",
      "Right now I'm a Full Stack Developer Intern at The Cognitive, where I'm building MathCom Mentors, a learning platform for teachers, students and parents. I handle the whole project, from planning and design to coding, testing and putting it live.",
      "In my own time, I build projects that solve real problems, like a website for an NGO, a clinic appointment booking system and a train travel app. I care about making things that work well and are easy for people to use.",
    ],
    focus: [
      { title: "Building now", body: "MathCom Mentors, a four-role learning platform for a London-based client, shipped solo." },
      { title: "Sharpening", body: "Data structures and algorithms in Java, practised daily on LeetCode, alongside system design." },
      { title: "Curious about", body: "Putting LLMs inside product flows as one bounded step rather than the whole feature." },
      { title: "Looking for", body: "A software engineering role where I own features from requirement to deployment." },
    ],
  },

  /* 5. SKILLS */
  skills: [
    {
      category: "Languages",
      icon: "code",
      blurb: "Java for problem solving, JavaScript and TypeScript for everything that runs on the web.",
      items: [
        { name: "Java", core: true, note: "Data structures, algorithms and object-oriented design" },
        { name: "JavaScript", core: true, note: "The language behind every project on this page" },
        { name: "TypeScript", note: "Typed React and Node on Yatra Saral" },
        { name: "Python", note: "Backend work on the Pahal Foundation platform" },
      ],
    },
    {
      category: "Frontend",
      icon: "layout",
      blurb: "Interfaces built in React, on semantic HTML and hand-written responsive CSS.",
      items: [
        { name: "React.js", core: true, note: "Component-driven interfaces with client-side routing" },
        { name: "HTML", note: "Semantic, accessible document structure" },
        { name: "CSS", note: "Responsive layouts without a framework when it's warranted" },
      ],
    },
    {
      category: "Backend & databases",
      icon: "database",
      blurb: "APIs and business logic in Node and Django, with data in MongoDB or MySQL.",
      items: [
        { name: "Node.js", core: true, note: "Application servers and background jobs" },
        { name: "Express.js", core: true, note: "REST APIs, middleware and role-based auth" },
        { name: "Django", note: "Admin-heavy platforms with server-rendered views" },
        { name: "MongoDB", core: true, note: "Document modelling for multi-role applications" },
        { name: "MySQL", note: "Relational schemas, joins and constraints" },
      ],
    },
    {
      category: "Cloud, tools & APIs",
      icon: "cloud",
      blurb: "The services that turn an app into a product: storage, payments, AI and calendars.",
      items: [
        { name: "AWS S3", core: true, note: "Offloading uploads so the app server doesn't serve files" },
        { name: "Git & GitHub", note: "Clear, reviewable commit history" },
        { name: "Gemini API", note: "AI triage and summarisation inside a product flow" },
        { name: "Razorpay", note: "Payments with server-side verification" },
        { name: "Google Calendar API", note: "Writing appointments into real calendars" },
      ],
    },
  ],

  /* 6. PROJECTS                                                      */
  projects: [
    {
      id: "mathcom",
      name: "MathCom Mentors",
      tagline: "Four user roles, one learning platform",
      year: "2026",
      context: "Client work · The Cognitive",
      featured: true,
      accent: "#FF6B00",
      summary:
        "A learning platform for a London-based client where admins/teachers, graders, students and parents each get their own login and dashboard, built and tested end to end by me.",
      problem:
        "The client needed one platform serving four groups whose interests barely overlap. Teachers set work, students submit it, graders mark it, parents only want to know when something lands. Show the wrong person the wrong screen and the product is dead on arrival.",
      solution:
        "Four separate authentication paths feeding four dashboards from a single React and Node application, with the homework lifecycle (set with a deadline, submit, mark, write feedback) modelled as one flow that every role sees a different slice of. Uploaded files were moved to AWS S3 so the app server stops storing and serving them and email became automatic: deadline reminders to students, new-grade notifications to parents.",
      features: [
        "Four isolated roles: admin/teacher, grader, student and parent",
        "Homework set with deadlines, submitted, marked and returned with written feedback",
        "A study material library attached to each class",
        "File uploads stored on AWS S3, not on the app server",
        "Automatic deadline reminders and new-grade notifications by email",
        "Every flow manually tested before hand-off",
      ],
      stack: ["React.js", "Node.js", "MongoDB", "AWS S3", "Express.js"],
      architecture: [
        { layer: "React client", detail: "Four role-scoped dashboards behind one router" },
        { layer: "Express API", detail: "Role-based auth, homework and grading endpoints" },
        { layer: "Node services", detail: "Scheduled reminder and notification email jobs" },
        { layer: "MongoDB", detail: "Users, classes, assignments, submissions, grades" },
        { layer: "AWS S3", detail: "Submissions and study material files" },
      ],
      challenges:
        "Keeping four roles genuinely separated rather than hiding buttons in the UI, so every endpoint had to assume the caller might be the wrong role. The grading flow also has to be resilient to partial work: a grader who marks half a batch and closes the tab shouldn't lose anything.",
      learned:
        "Owning a project end to end changes how you write code. When there's nobody else to hand a bug to, you start defending against the failure cases while you build instead of after.",
      next: "Analytics for teachers on submission and grade trends over a term.",
      image: "assets/img/projects/mathcom.jpg",
      imageAlt: "The MathCom Mentors sign-in screen",
      links: {
        live: "https://mathcommentors.com/",
        code: "https://github.com/Rudragupta23/Teacher-Student-Portal",
      },
    },
    {
      id: "pahal",
      name: "Pahal Foundation",
      tagline: "An NGO's paperwork, finally off paper",
      year: "2026",
      context: "Personal project",
      featured: true,
      accent: "#D94F00",
      summary:
        "A web platform for an NGO educating underprivileged children, covering admissions, student records, daily attendance, volunteer sign-ups and online donations in one place.",
      problem:
        "The foundation ran admissions, student records, attendance and volunteer sign-ups on paper. Records got lost, attendance was impossible to look back on and donations had no auditable trail.",
      solution:
        "A Django platform with two dashboards - one for admins, one for teachers - covering admissions, attendance, volunteers and media. Razorpay handles donations with server-side payment verification, so every transaction leaves a record that can be checked later. Uploads go to AWS S3 to keep files off the app server.",
      features: [
        "Student admissions and records, searchable rather than stacked in a folder",
        "Daily attendance captured by teachers",
        "Volunteer sign-ups handled online",
        "Razorpay donations with server-side verification",
        "An auditable record of every transaction",
        "Admin and teacher dashboards with media management",
        "Uploads offloaded to AWS S3",
      ],
      stack: ["Django", "Python", "JavaScript", "Razorpay", "AWS S3"],
      architecture: [
        { layer: "Django views & templates", detail: "Admin and teacher dashboards" },
        { layer: "Application layer", detail: "Admissions, attendance, volunteers, media" },
        { layer: "Razorpay", detail: "Checkout plus server-side signature verification" },
        { layer: "Database", detail: "Students, attendance, volunteers, transactions" },
        { layer: "AWS S3", detail: "Media and document storage" },
      ],
      challenges:
        "Payment verification is the part you cannot get approximately right. A client-side success callback proves nothing, so the server verifies the signature before a donation is ever recorded as received.",
      learned:
        "Software for an organisation that has never used software has to match how they already work. The attendance screen went through several rounds before it was faster than the paper register it replaced.",
      next: "Printable term reports for attendance and enrolment.",
      image: "assets/img/projects/pahal.jpg",
      imageAlt: "The Pahal Foundation homepage",
      links: {
        live: "https://pahalfoundationvitb.onrender.com/",
        code: "https://github.com/Rudragupta23/PahalFoundation",
      },
    },
    {
      id: "healthcare",
      name: "Healthcare Appointment",
      tagline: "AI triage in front of a doctor's calendar",
      year: "2026",
      context: "Personal project",
      featured: true,
      accent: "#FF8A3D",
      summary:
        "A clinic appointment platform with patient, doctor and admin logins, where a Gemini model reads the patient's symptoms before the visit and hands the doctor a summary, an urgency rating and three questions to ask.",
      problem:
        "Two problems at once. Doctors walk into appointments knowing nothing until the patient starts talking and any booking system without proper locking will eventually sell the same slot twice.",
      solution:
        "Patients describe their symptoms when booking. The Gemini API rates urgency, summarises the complaint and generates three questions for the doctor. On the booking side, a slot is held for 10 minutes while the form is being filled in, so if ten people hit the same slot at once, exactly one gets it and the other nine are told it's taken. Follow-up runs itself: the visit is written to Google Calendar and a reminder email goes out for every single dose of medication, with failed sends retried five times.",
      features: [
        "Three logins: patient, doctor and admin",
        "Gemini-generated urgency rating, summary and three suggested questions",
        "10-minute slot hold while the booking form is completed",
        "Exactly one winner when multiple patients book the same slot",
        "Appointments written to Google Calendar",
        "A reminder email per dose, so 3 a day for 5 days is 15 emails",
        "Failed emails retried up to 5 times",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Google Calendar API"],
      architecture: [
        { layer: "React client", detail: "Patient, doctor and admin views" },
        { layer: "Express API", detail: "Auth, booking, slot locking" },
        { layer: "Gemini API", detail: "Symptom summary, urgency, suggested questions" },
        { layer: "Scheduler", detail: "Per-dose reminder emails with retry" },
        { layer: "MongoDB", detail: "Patients, doctors, slots, prescriptions" },
        { layer: "Google Calendar", detail: "Appointment sync" },
      ],
      challenges:
        "Concurrency. The naive version happily double-booked under load, so the slot had to become a short-lived reservation with an expiry rather than a flag flipped at the end of the form.",
      learned:
        "An LLM is most useful as one clearly bounded step inside a flow. It summarises and suggests; it never decides who gets seen.",
      next: "Prescription history search for doctors across repeat visits.",
      image: "assets/img/projects/healthcare.jpg",
      imageAlt: "The HealthCare Portal sign-in screen",
      links: {
        live: "https://healthcare-appointment-amsy.onrender.com/",
        code: "https://github.com/Rudragupta23/HealthCare-Appointment",
      },
    },
    {
      id: "yatra",
      name: "Yatra Saral",
      tagline: "A train journey, end to end",
      year: "2025",
      context: "Personal project",
      featured: false,
      accent: "#FF6B00",
      summary:
        "A train travel platform covering the whole journey: seat and group booking, e-tickets, live tracking, platform services, pantry ordering and insurance, built to be usable by elderly and low-literacy travellers.",
      problem:
        "Booking a train is only the first five minutes of a journey. Everything after it (tracking, a coolie, a wheelchair, food, a cancellation) lives somewhere else and most of it assumes a confident English reader with good eyesight.",
      solution:
        "One platform for the whole trip: seat and group booking with e-ticket generation, live tracking, platform services including cloak room, coolie and wheelchair, pantry ordering and insurance. Sign-up is secured with email OTP verification and password recovery and a profile area holds ticket downloads, cancellations, booking history and saved passengers. The interface runs in Hindi and English with read-aloud support and adjustable font sizes.",
      features: [
        "Seat and group booking with e-ticket generation",
        "Live train tracking",
        "Platform services: cloak room, coolie, wheelchair",
        "Pantry ordering and travel insurance",
        "Email OTP verification and password recovery",
        "Profile area: downloads, cancellation, history, saved passengers",
        "Hindi/English interface with read-aloud and adjustable font sizes",
      ],
      stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      architecture: [
        { layer: "React + TypeScript client", detail: "Bilingual, accessible booking flow" },
        { layer: "Express API", detail: "Booking, services, OTP auth" },
        { layer: "Node services", detail: "E-ticket generation, tracking updates" },
        { layer: "MongoDB", detail: "Bookings, passengers, services, insurance" },
      ],
      challenges:
        "Accessibility as a real constraint rather than a checkbox. Two languages, read-aloud and resizable type all have to survive contact with the booking flow, which is the densest screen in the product.",
      learned:
        "Designing for the least confident user makes the product better for everyone. The larger touch targets and plainer wording helped every tester, not just the intended ones.",
      next: "Offline e-ticket access for travellers without signal at the station.",
      image: "assets/img/projects/yatra.jpg",
      imageAlt: "The Yatra Saral homepage",
      links: {
        live: "https://yatrasaral.onrender.com/",
        code: "https://github.com/Rudragupta23/Yatra-Saral-Web-Application",
      },
    },
  ],

  /* 7. EXPERIENCE                                                    */
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "The Cognitive",
      location: "Toronto, ON, Canada (Remote)",
      period: "Aug 2026 - Present",
      current: true,
      summary:
        "Sole developer on MathCom Mentors, a multi-role learning platform for a London-based client - taking requirements through to a tested, deployed product.",
      responsibilities: [
        "Handle the project end to end on my own: take the client's requirements, build the pages users see and the work behind them and keep four kinds of users apart, each with their own login and dashboard - admin/teacher, grader, student and parent.",
        "Built the homework side from start to finish: teachers set work with a deadline, students hand it in, a grader marks it and writes feedback on each one, alongside a library of study material - and I test every flow myself before handing it over.",
        "Moved uploaded files to AWS S3 so the app server no longer has to store or serve them, set up automatic emails that remind students of deadlines and tell parents when new grades are out and keep the code in Git in clear commits.",
      ],
      stack: ["React.js", "Node.js", "MongoDB", "AWS S3"],
    },
  ],

  /* 8. CERTIFICATIONS */
  certifications: [
    {
      id: "oracle-agentic-ai",
      name: "Oracle Certified Foundations Associate, Agentic AI",
      issuer: "Oracle University",
      year: "2026",
      date: "Aug 2026",
      highlight: "",
      note: "Recognised by Oracle as certified in the foundations of agentic AI systems and their building blocks.",
      facts: [
        { label: "Issued", value: "August 5, 2026" },
        { label: "Credential ID", value: "103505445AAI26OFA" },
      ],
      image: "assets/img/certificates/oracle-agentic-ai-foundations.jpg",
      thumb: "assets/img/certificates/oracle-agentic-ai-foundations-thumb.jpg",
      pdf: "assets/certificates/oracle-agentic-ai-foundations.pdf",
      credentialUrl: "",
    },
    {
      id: "servicenow-internship",
      name: "ServiceNow Virtual Internship Program",
      issuer: "ServiceNow University, AICTE, SmartBridge",
      year: "2026",
      date: "Jul 2026",
      highlight: "",
      note: "Platform fundamentals delivered as a structured virtual internship, run with AICTE under the Ministry of Education.",
      facts: [
        { label: "Issued", value: "July 6, 2026" },
        { label: "Certificate ID", value: "SNU2028082" },
      ],
      covered: [
        "ServiceNow Administration Fundamentals",
        "Introduction to Agentic AI",
        "Introduction to Flows",
        "Automated Test Framework (ATF) Essentials",
        "Getting started with Reports",
        "Certified System Administrator (CSA) exam preparation",
      ],
      image: "assets/img/certificates/servicenow-virtual-internship.jpg",
      thumb: "assets/img/certificates/servicenow-virtual-internship-thumb.jpg",
      pdf: "assets/certificates/servicenow-virtual-internship.pdf",
      credentialUrl: "",
    },
    {
      id: "cisco-networking-basics",
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2026",
      date: "May 2026",
      highlight: "",
      note: "Addressing, protocols and how traffic actually moves between machines.",
      facts: [
        { label: "Issued", value: "May 9, 2026" },
        { label: "Level", value: "Student credential, verified" },
      ],
      covered: [
        "Network types, components and connections",
        "Standards and protocols in network communication",
        "How communication works on Ethernet networks",
        "IPv4 and IPv6 addressing",
        "How routers connect networks together",
        "Testing and troubleshooting connectivity",
        "Configuring a wireless router and client securely",
      ],
      image: "assets/img/certificates/cisco-networking-basics.jpg",
      thumb: "assets/img/certificates/cisco-networking-basics-thumb.jpg",
      pdf: "assets/certificates/cisco-networking-basics.pdf",
      credentialUrl: "",
    },
    {
      id: "nptel-marketing-analytics",
      name: "Marketing Analytics",
      issuer: "NPTEL, IIT Kharagpur",
      year: "2026",
      date: "Jan–Apr 2026",
      highlight: "Elite + Gold, top 5%",
      note: "A 12-week course, finished with a 97% consolidated score and a place in the top 5% of the national cohort.",
      facts: [
        { label: "Score", value: "97%" },
        { label: "Assignments", value: "25 / 25" },
        { label: "Proctored exam", value: "72 / 75" },
        { label: "Candidates certified", value: "3,495" },
        { label: "Roll no.", value: "NPTEL26MG33S952403232" },
      ],
      image: "assets/img/certificates/nptel-marketing-analytics.jpg",
      thumb: "assets/img/certificates/nptel-marketing-analytics-thumb.jpg",
      pdf: "assets/certificates/nptel-marketing-analytics.pdf",
      credentialUrl: "",
    },
    {
      id: "aws-technical-essentials",
      name: "AWS Technical Essentials",
      issuer: "AWS Training & Certification",
      year: "2025",
      date: "Sep 2025",
      highlight: "",
      note: "Core AWS services, the groundwork behind the S3 work in my projects.",
      facts: [
        { label: "Completed", value: "September 18, 2025" },
      ],
      image: "assets/img/certificates/aws-technical-essentials.jpg",
      thumb: "assets/img/certificates/aws-technical-essentials-thumb.jpg",
      pdf: "assets/certificates/aws-technical-essentials.pdf",
      credentialUrl: "",
    },
    {
      id: "nptel-machine-learning",
      name: "Introduction to Machine Learning",
      issuer: "NPTEL, IIT Madras",
      year: "2025",
      date: "Jan–Apr 2025",
      highlight: "Elite",
      note: "Supervised and unsupervised learning, evaluation and model selection, over a 12-week course.",
      facts: [
        { label: "Duration", value: "12 weeks" },
        { label: "Candidates certified", value: "6,009" },
        { label: "Roll no.", value: "NPTEL25CS46S450400246" },
      ],
      image: "assets/img/certificates/nptel-machine-learning.jpg",
      thumb: "assets/img/certificates/nptel-machine-learning-thumb.jpg",
      pdf: "assets/certificates/nptel-machine-learning.pdf",
      credentialUrl: "",
    },
    {
      id: "google-computer-networking",
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Google, Coursera",
      year: "2024",
      date: "Oct 2024",
      highlight: "",
      note: "Google's networking course: the layers of the network model, TCP/IP, DNS and DHCP and troubleshooting real connectivity problems.",
      facts: [
        { label: "Completed", value: "October 13, 2024" },
        { label: "Verify code", value: "I1X4MWER8MWD" },
      ],
      image: "assets/img/certificates/google-bits-and-bytes-networking.jpg",
      thumb: "assets/img/certificates/google-bits-and-bytes-networking-thumb.jpg",
      pdf: "assets/certificates/google-bits-and-bytes-networking.pdf",
      credentialUrl: "https://coursera.org/verify/I1X4MWER8MWD",
    },
  ],

  /* 10. CODING ACTIVITY                                              */

  coding: {
    githubUser: "Rudragupta23",
    profiles: [
      {
        platform: "GitHub",
        handle: "@Rudragupta23",
        url: "https://github.com/Rudragupta23",
        blurb: "Source for the projects below, in clear commits.",
      },
      {
        platform: "LeetCode",
        handle: "@Rudragupta23",
        url: "https://leetcode.com/u/Rudragupta23/",
        blurb: "Where the data structures and algorithms practice happens.",
      },
    ],
  },

  /* 11. SEO                                                          */
  seo: {
    title: "Rudra Gupta - Full Stack Developer",
    description:
      "Full stack developer and CS undergraduate at VIT. React, Node, Django and MongoDB. Currently building a multi-role learning platform for a London-based client.",
    url: "https://rudraguptaportfolio.live",
  },
};

window.PORTFOLIO = PORTFOLIO;

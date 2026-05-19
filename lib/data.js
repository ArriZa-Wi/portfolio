export const PORTFOLIO_DATA = {
  name: "Arriza Wibowo",
  role: "Full-Stack Developer & Systems Engineer",
  location: "Kalamazoo, Michigan",
  email: "arrizafathi@gmail.com",
  phone: "269-312-9154",
  github: "https://github.com/ArriZa-Wi",
  linkedin: "https://linkedin.com/in/arriza-wibowo",
  tagline: "Co-founder of Electric Trident, full-stack dev, and tinkerer with anything that ships — from AI tooling that talks to Revit, to community sites that actually get used.",

  about: [
    "Hey, I'm Arriza. CS sophomore at Western Michigan University with a 4.0 GPA, system administrator at WMU's College of Engineering, and co-founder of Electric Trident — a software consultancy currently running seven client projects.",
    "I bring a wide arsenal of IT and dev skills — from imaging fleets and Active Directory migrations to shipping AI tooling and full-stack apps on the T3 and Django stacks."
  ],

  featured: [
    {
      id: "graduai",
      n: "01",
      name: "GraduAI",
      sub: "An AI copilot for degree planning",
      role: "Personal project · in progress",
      year: "2026",
      stack: ["Next.js", "TypeScript", "LLM", "RAG", "Tailwind"],
      blurb: "An AI-powered degree-planning web app that parses DegreeWorks audit PDFs into a structured requirements dashboard, with an LLM chat advisor and a drag-and-drop semester planner.",
      details: [
        "Parses DegreeWorks audit PDFs into intuitive requirement groups — 'Complete All' courses vs 'Choose N' electives — so progress reads at a glance.",
        "LLM chat assistant with retrieval-augmented context (your audit + course catalog + prerequisite chains) that answers things like 'What should I take next semester?'",
        "Drag-and-drop semester plan builder with shareable plan links so students can collaborate with advisors or peers.",
        "Designed the parsing workflow, the conversational UX, and the full visual system end-to-end."
      ],
      metrics: [
        { k: "Audits", v: "PDF → schema" },
        { k: "Advisor", v: "RAG-grounded" }
      ],
      links: []
    },
    {
      id: "revit-copilot",
      n: "02",
      name: "Revit Copilot",
      sub: "AI extension for Autodesk Revit",
      role: "Research Programmer · WMU",
      year: "2025 — 2026",
      stack: ["Revit API", "Python", "LLM", "RAG"],
      blurb: "A modeless Revit extension that turns natural-language prompts into safe, validated API actions. Built under Dr. Hexu Liu's research team.",
      details: [
        "Designed a modular system that translates prompts into safe, validated Revit API calls.",
        "Migrated the UI from modal to modeless using the ExternalEvent pattern — no more 'invalid API context' crashes, no more UI blocking.",
        "Wrote a strict Rules file the LLM uses to recognize keywords (wall, floor, ceiling) and require the parameters each needs before generating 3D models.",
        "Built a feedback + audit pipeline so every action is logged and replayable."
      ],
      metrics: [
        { k: "Latency cut", v: "modal → modeless" },
        { k: "Model state", v: "RAG-aware" }
      ],
      links: []
    },
    {
      id: "tweeter",
      n: "03",
      name: "Tweeter",
      sub: "Twitter clone, the long way",
      role: "Solo project",
      year: "2024",
      stack: ["Django", "Python", "Bootstrap 5", "jQuery"],
      blurb: "A full-featured Twitter clone built end-to-end. Custom user model, AJAX likes, comments, public/private profiles, and a deployment that actually works.",
      details: [
        "Custom user model with public/private profile toggle.",
        "Full CRUD via class-based views with authorization mixins.",
        "AJAX like/unlike toggling and a threaded comment system.",
        "Automated tests + Gunicorn/WhiteNoise deployment config."
      ],
      metrics: [
        { k: "Views", v: "Class-based + mixins" },
        { k: "Tests", v: "Automated" }
      ],
      links: [{ label: "GitHub", href: "https://github.com/ArriZa-Wi" }]
    },
    {
      id: "ytsave",
      n: "04",
      name: "YTSave",
      sub: "YouTube → MP3/MP4, type-safe end-to-end",
      role: "Hackathon · 2nd place",
      year: "2025",
      stack: ["Next.js 15", "TypeScript", "tRPC 11", "Prisma 6", "NextAuth v5", "Tailwind"],
      blurb: "A YouTube downloader I built on the T3 stack in one weekend. Type-safe API, real-time progress, shadcn/ui front-end. Took 2nd at the WMU hackathon.",
      details: [
        "Type-safe tRPC API with Zod validation for video metadata fetches.",
        "Background yt-dlp/FFmpeg processes spawned via Node child_process, streamed straight to the browser.",
        "Real-time download progress via SQLite/Prisma + React Query polling.",
        "Format/quality selectors built with shadcn/ui."
      ],
      metrics: [
        { k: "Stack", v: "T3" },
        { k: "Built in", v: "1 weekend" }
      ],
      links: [{ label: "GitHub", href: "https://github.com/ArriZa-Wi" }]
    }
  ],

  experience: [
    {
      role: "Co-Founder",
      org: "Electric Trident LLC",
      orgHref: "https://www.electrictrident.com/",
      where: "Grand Rapids & Kalamazoo, MI",
      when: "2026 — Present",
      metric: { v: "7", k: "active client projects" },
      bullets: [
        "Co-founded a software consultancy with a fellow WMU student. Services structured around three pillars: Business Requirements & Scope, Development, and IT / Maintenance.",
        "Engage directly with clients to gather requirements, define scope, and deliver fixed-price or retainer-based solutions — from marketing sites to full web apps.",
        "Provide ongoing infrastructure support, maintenance, and fractional CTO services for early-stage teams and small businesses across West Michigan."
      ]
    },
    {
      role: "Research Programmer",
      org: "Dr. Hexu Liu Research Team — WMU",
      where: "Kalamazoo, MI",
      when: "Sep 2025 — Jan 2026",
      bullets: [
        "Built the Revit Copilot — LLM-driven Revit automation with RAG over real-time model state.",
        "Refactored Revit-API ops behind the ExternalEvent pattern to make the extension modeless.",
        "Authored a Rules file the LLM uses to validate parameters before generating 3D geometry.",
        "Logged everything through a feedback + auditing pipeline."
      ]
    },
    {
      role: "Web Developer",
      org: "Developer Club at WMU",
      where: "Kalamazoo, MI",
      when: "Mar 2025 — Present",
      bullets: [
        "Designed and maintain the Events feature on the club's official site (T3 stack + Firebase).",
        "Independently built a Django community site for the Town of Berwyn, IL — secured a $600 donation to the club on launch.",
        "Wrote the secure admin flow so non-technical admins can update content without touching source."
      ]
    },
    {
      role: "System Administrator",
      org: "WMU College of Engineering",
      where: "Kalamazoo, MI",
      when: "Jan 2025 — Present",
      bullets: [
        "Administer engineering-college software across student labs, faculty offices, and research systems via centralized license servers.",
        "Build and deploy standardized PC/laptop images with Clonezilla; manage specialized images for faculty research environments.",
        "Lead migration of college-owned devices to Active Directory for role-based profile management."
      ]
    },
    {
      role: "Computer Technician / IT Support",
      org: "Kalamazoo Valley Community College",
      where: "Kalamazoo, MI",
      when: "Jun 2023 — Apr 2025",
      bullets: [
        "Wrote a Python script to automate user-profile cleanup across the college's Windows fleet — error recovery, exception handling, logging.",
        "Oversaw re-imaging of 500+ loaner laptops each semester, tracked by serial + asset tag.",
        "Built out classrooms and lab stations in the Dental Hygiene Building each term."
      ]
    }
  ],

  awards: [
    {
      id: "python",
      name: "Python Development",
      conf: "MWC3",
      href: "https://mwc3.org/competition/2026-python-development/",
      blurb: "Live algorithmic problem-solving in Python. Competitors get a packet of timed problems — input parsing, data structures, algorithmic correctness, and code quality all count toward the score.",
      placements: [
        { year: "2026", place: "1st" },
        { year: "2023", place: "1st" }
      ]
    },
    {
      id: "django",
      name: "Web Application with Django",
      conf: "MWC3",
      href: "https://mwc3.org/competition/2026-web-application-with-django/",
      blurb: "Build a working Django web app from a fresh spec within the competition window. Judged on models, views, URL routing, templates, auth, and how cleanly the whole thing comes together.",
      placements: [
        { year: "2026", place: "1st" }
      ]
    },
    {
      id: "erp",
      name: "ERP with ScrimmageSIM",
      conf: "MWC3",
      href: "https://mwc3.org/competition/2026-erp-with-scrimmagesim-learning/",
      blurb: "Run a virtual company through ScrimmageSIM — make production, pricing, marketing, and finance decisions across simulated quarters. Best margin and market share wins.",
      placements: [
        { year: "2024", place: "1st" },
        { year: "2023", place: "1st" }
      ]
    },
    {
      id: "arduino",
      name: "Microcontroller Fundamentals — Arduino",
      conf: "MWC3",
      href: "https://mwc3.org/competition/2026-microcontroller-fundamentals-with-arduino/",
      blurb: "Wire and program an Arduino against a hardware brief — sensors, actuators, timing, serial I/O. Judged on a working prototype plus the underlying firmware.",
      placements: [
        { year: "2026", place: "3rd" },
        { year: "2025", place: "2nd" },
        { year: "2023", place: "HM" }
      ]
    },
    {
      id: "wmu-hack",
      name: "WMU Hackathon",
      conf: "Western Michigan University",
      href: "https://experiencewmu.wmich.edu/event/12251668",
      blurb: "Weekend hackathon hosted at WMU. I built YTSave — a type-safe YouTube → MP3/MP4 downloader on the T3 stack — and took second place.",
      placements: [
        { year: "2025", place: "2nd" }
      ]
    },
    {
      id: "scholarship",
      name: "Global Education Merit Scholarship",
      conf: "Western Michigan University",
      href: "https://wmich.edu/admissions/scholarships",
      blurb: "Four-year merit scholarship awarded to high-achieving international undergraduates. $10,000 per year, renewable for four years.",
      placements: [
        { year: "2024 — 28", place: "★" }
      ]
    }
  ],

  skills: {
    "Languages": ["Python", "TypeScript", "JavaScript", "C#", "HTML/CSS", "SQL"],
    "Frameworks": ["Next.js", "React", "Django", "T3 Stack", "tRPC", "Tailwind"],
    "Data": ["Prisma", "Firebase", "SQLite", "pandas"],
    "Auth & APIs": ["NextAuth", "Zod", "REST", "Revit API"],
    "Systems & IT": ["Active Directory", "Clonezilla", "Image deployment", "Absolute"],
    "Tools": ["Git", "shadcn/ui", "Gunicorn", "WhiteNoise", "FFmpeg", "yt-dlp"]
  },

  education: {
    school: "Western Michigan University",
    degree: "B.S. Computer Science",
    when: "Expected April 2028",
    gpa: "4.0",
    honors: [
      "Global Education Undergraduate Merit Scholarship — $10,000/yr × 4",
      "Dean's List — every semester"
    ]
  }
};

export const SECTIONS = [
  { id: "hero", label: "intro" },
  { id: "about", label: "about" },
  { id: "projects", label: "work" },
  { id: "experience", label: "experience" },
  { id: "awards", label: "awards" },
  { id: "skills", label: "stack" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" }
];

export const PORTFOLIO_DATA = {
  name: "Arriza Wibowo",
  role: "Full-Stack & AI Engineer · Systems Administrator",
  location: "Kalamazoo, Michigan",
  email: "arrizafathi@gmail.com",
  phone: "269-312-9154",
  github: "https://github.com/ArriZa-Wi",
  linkedin: "https://linkedin.com/in/arriza-wibowo",
  tagline: "Co-founder of Electric Trident. This summer I shipped a headless-Shopify gifting portal, an AI tutoring platform used live by student teams, and an accessibility-first ride-dispatch system.",

  about: [
    "Hey, I'm Arriza. I'm a junior in Computer Science at Western Michigan University with a 4.0 GPA, a system administrator for WMU's College of Engineering, a research programmer in the ECE department, and co-founder of Electric Trident, a software consultancy with six client projects.",
    "At Electric Trident I lead the engineering: production web apps on Next.js and Supabase, AI features built with real guardrails, Postgres row-level security as the authorization layer, and Playwright-tested releases. I also wrote the engineering standards every one of our client repos follows.",
    "Outside client work I keep the college's labs, license servers, and VMware infrastructure running, port GPU benchmarks for an NSF-funded research study, and compete at MWC3."
  ],

  featured: [
    {
      id: "swivelserve",
      n: "01",
      name: "SwivelServe",
      sub: "B2B gifting and e-commerce portal",
      role: "Electric Trident · client build",
      year: "2026",
      stack: ["Next.js 16", "TypeScript", "Supabase", "Postgres RLS", "Shopify Admin API", "Playwright"],
      blurb: "A full-stack portal where real-estate agents buy credit bundles and send personalized, laser-engraved gifts to their clients through a guided ordering wizard. Shopify runs headless underneath as the payment and order backend. Phase 1 is live and accepted by the client.",
      details: [
        "5-step ordering wizard with a live Canvas 2D engraving preview that redraws as the agent types.",
        "Shopify as a headless payment and order backend, with HMAC-verified webhooks syncing fulfillment status from ShipStation.",
        "Postgres schema across 22 versioned migrations with row-level security on every table and atomic credit-debit logic that prevents race conditions and double-spend.",
        "Multi-tenant organizations (shared credit pools, invites, spend permissions) and an admin analytics dashboard served by a single Postgres RPC.",
        "Diagnosed a live bot and email-bombing incident, then shipped Cloudflare Turnstile, honeypot traps, and a scheduled cleanup job."
      ],
      metrics: [
        { k: "E2E suite", v: "23 Playwright specs" },
        { k: "Schema", v: "RLS on every table" }
      ],
      links: [{ label: "portal.swivelserve.com", href: "https://portal.swivelserve.com" }]
    },
    {
      id: "ignite",
      n: "02",
      name: "IGNITE AI Platform",
      sub: "AI tutoring platform for a youth innovation camp",
      role: "Electric Trident · lead engineer",
      year: "2026",
      stack: ["Next.js 16", "React 19", "Vercel AI SDK", "Supabase", "Drizzle ORM", "Open-weight LLMs"],
      blurb: "A production AI tutoring platform used live by student teams, ages 13 to 15, during a five-day innovation camp in Kalamazoo. Three chat modes cover brainstorming, research, and building working app prototypes, with counselors watching over everything from an admin dashboard.",
      details: [
        "Live prototype engine: the model streams sentinel-tagged HTML into a sandboxed iframe, and targeted find/replace edits cut per-edit token cost about 5.5x (83 vs. 456 output tokens).",
        "Streams two open-weight models through an OpenAI-compatible provider, with a 3-layer pipeline that strips chain-of-thought tokens from the UI, the database, and admin transcripts.",
        "3-layer defense-in-depth authorization (edge middleware, page guards, per-action checks) plus HMAC-derived passwordless login for minors.",
        "Content-safety system (topic classifier, hardened prompts, live-search blocking, counselor review queue) shipped mid-camp in response to a real incident.",
        "Upload security for minors: magic-byte signature checks, zip-bomb guards, and client-side EXIF/GPS stripping."
      ],
      metrics: [
        { k: "Edit cost", v: "~5.5x fewer tokens" },
        { k: "Status", v: "Used live at camp" }
      ],
      links: []
    },
    {
      id: "bronconav",
      n: "03",
      name: "BroncoNav",
      sub: "Accessible ride dispatch for a university disability-services office",
      role: "Electric Trident · primary engineer",
      year: "2026",
      stack: ["Next.js 16", "TypeScript", "Supabase", "Postgres RLS", "Playwright", "axe-core"],
      blurb: "A full-stack ride-request and dispatch platform built under an institutional contract. Students request rides, drivers claim them, and dispatchers run the whole operation, with WCAG 2.1 AA compliance enforced by the build pipeline instead of a checklist.",
      details: [
        "Postgres Row-Level Security as the authorization layer, with security-definer functions for time-bound visibility (a rider's phone number is visible to their driver only during an active ride).",
        "Audited and fixed two privilege-escalation vulnerabilities in the RLS and trigger layer, plus CSP and security-header hardening.",
        "Automated WCAG 2.1 AA harness (Playwright + axe-core) covering 50 success criteria across three browser engines, producing evidence for a formal VPAT/ACR.",
        "GitHub Actions gates every merge on accessibility linting and axe scans; notifications run statelessly on Vercel Cron and Resend."
      ],
      metrics: [
        { k: "WCAG 2.1 AA", v: "50 criteria automated" },
        { k: "CI", v: "3 browser engines" }
      ],
      links: []
    },
    {
      id: "revit-copilot",
      n: "04",
      name: "Revit Copilot",
      sub: "AI extension for Autodesk Revit",
      role: "Research Programmer · WMU",
      year: "2025 - 2026",
      stack: ["Revit API", "C#", "Python", "LLM", "RAG"],
      blurb: "A modeless Revit extension that turns natural-language prompts into safe, validated API actions. Built with Dr. Hexu Liu's research team.",
      details: [
        "Designed a modular system that translates prompts into safe, validated Revit API calls, with context extraction for real-time model-state awareness.",
        "Migrated the UI from modal to modeless with the ExternalEvent pattern, which ended 'invalid API context' crashes and UI blocking.",
        "Wrote a strict rules file the LLM uses to recognize keywords (wall, floor, ceiling) and require each one's parameters before generating 3D geometry.",
        "Built a feedback and audit pipeline so every action is logged and replayable."
      ],
      metrics: [
        { k: "UI", v: "modal → modeless" },
        { k: "Model state", v: "RAG-aware" }
      ],
      links: []
    }
  ],

  experience: [
    {
      role: "Co-Founder & Lead Engineer",
      org: "Electric Trident LLC",
      orgHref: "https://www.electrictrident.com/",
      where: "Grand Rapids & Kalamazoo, MI",
      when: "2026 - Present",
      metric: { v: "6", k: "client projects" },
      bullets: [
        "Co-founded a software consultancy with a fellow WMU student. I lead full-stack and AI engineering across client engagements, from requirements and scope through delivery and ongoing maintenance.",
        "Shipped SwivelServe (B2B e-commerce on headless Shopify), the IGNITE AI tutoring platform, and BroncoNav (accessible ride dispatch). Details are in selected work above.",
        "Built Liminal Vantage, an expert-booking marketplace with three auth flows, a 30+ table Postgres schema secured by row-level policies, ~31 Deno edge functions for Stripe and booking webhooks, and an LLM recommendation chatbot with prompt-injection defenses.",
        "Authored ET-Framework, the company-wide engineering standard: a security playbook spanning 9 threat categories (including prompt injection and RAG leakage), an 11-section AI-feature build guide, a Playwright + axe-core testing standard, and a casebook that turns real production incidents into rules.",
        "Made RLS-first authorization and Playwright-gated releases the default across every client repo."
      ]
    },
    {
      role: "Research Programmer",
      org: "Dr. Lina Sawalha Research Team, WMU ECE",
      where: "Kalamazoo, MI",
      when: "Jun 2026 - Present",
      metric: { v: "48", k: "graphics test configs" },
      bullets: [
        "Sole developer on an NSF-funded study of mobile GPU energy use (Unity, C#, Python, ADB), taken as an ECE 4900 independent study.",
        "Diagnosed and fixed 15 defects in an inherited Unity benchmark that had never run successfully, delivering a fully automated, sentinel-verified Android test harness.",
        "Designed a JSON-driven config system generating 48 graphics-test configurations across 15 rendering parameters, and ported the benchmark from Unity 2020.3 to Unity 6.3.",
        "Built a Python orchestration and analysis toolchain for automated sweeps and results reporting. Next up: on-device energy profiling with Gator performance counters and Perfetto power-rail capture."
      ]
    },
    {
      role: "Research Programmer",
      org: "Dr. Hexu Liu Research Team, WMU",
      where: "Kalamazoo, MI",
      when: "Sep 2025 - Jan 2026",
      bullets: [
        "Built AI Revit Copilot, a modular system that turns natural-language commands into safe, validated Revit API actions using RAG over real-time model state.",
        "Refactored the extension from modal to modeless with the ExternalEvent pattern.",
        "Implemented rule-based 3D model generation from a strict keyword and parameter rules file derived from the Revit documentation, with every action logged through an audit pipeline."
      ]
    },
    {
      role: "System Administrator",
      org: "WMU College of Engineering",
      where: "Kalamazoo, MI",
      when: "Jan 2025 - Present",
      bullets: [
        "Migrated college-owned devices to Active Directory, enabling secure role-based access for students, faculty, and staff.",
        "Manage virtualized infrastructure for engineering software and license servers with VMware vCenter, ESXi, and vSphere; migrated the CATIA license server from a VM to a dedicated physical host.",
        "Built and maintain a centralized file-sharing server that gives labs and faculty secure, organized access to shared resources.",
        "Create and deploy standardized PC and laptop images with Clonezilla, including specialized images for faculty research environments."
      ]
    },
    {
      role: "Web Developer",
      org: "Developer Club at WMU",
      where: "Kalamazoo, MI",
      when: "Mar 2025 - Present",
      bullets: [
        "Designed and maintain the Events feature on the club's official site (T3 stack + Firebase).",
        "Independently built a Django community site for the Town of Berwyn, IL, which earned the club a $600 donation at launch.",
        "Wrote a secure admin flow so non-technical admins can update content without touching source."
      ]
    },
    {
      role: "Computer Technician / IT Support",
      org: "Kalamazoo Valley Community College",
      where: "Kalamazoo, MI",
      when: "Jun 2023 - Apr 2025",
      bullets: [
        "Wrote a Python script to automate user-profile cleanup across the college's Windows fleet, with error recovery, exception handling, and logging.",
        "Oversaw re-imaging of 500+ loaner laptops each semester, tracked by serial number and asset tag.",
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
      blurb: "Live algorithmic problem-solving in Python. Competitors get a packet of timed problems, and input parsing, data structures, algorithmic correctness, and code quality all count toward the score.",
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
      blurb: "Run a virtual company through ScrimmageSIM, making production, pricing, marketing, and finance decisions across simulated quarters. Best margin and market share wins.",
      placements: [
        { year: "2024", place: "1st" },
        { year: "2023", place: "1st" }
      ]
    },
    {
      id: "arduino",
      name: "Microcontroller Fundamentals: Arduino",
      conf: "MWC3",
      href: "https://mwc3.org/competition/2026-microcontroller-fundamentals-with-arduino/",
      blurb: "Wire and program an Arduino against a hardware brief: sensors, actuators, timing, serial I/O. Judged on a working prototype plus the underlying firmware.",
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
      blurb: "Weekend hackathon hosted at WMU. I built YTSave, a type-safe YouTube to MP3/MP4 downloader on the T3 stack, and took second place.",
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
        { year: "2024 - 28", place: "★" }
      ]
    }
  ],

  skills: {
    "Languages": ["Python", "TypeScript", "JavaScript", "C#", "SQL", "HTML/CSS"],
    "Frameworks": ["Next.js", "React", "Django", "Tailwind CSS", "shadcn/ui", "Unity (URP)"],
    "AI / LLM": ["RAG", "Prompt engineering", "Vercel AI SDK", "OpenAI-compatible APIs", "Streaming UIs", "Prompt-injection defense"],
    "Data": ["PostgreSQL", "Supabase (Auth / RLS / Storage)", "Drizzle ORM", "Prisma", "Firebase", "pandas"],
    "Cloud & DevOps": ["Vercel", "Cloudflare", "GitHub Actions", "Supabase Edge Functions", "Vercel Cron", "Git"],
    "Testing & Accessibility": ["Playwright", "axe-core", "WCAG 2.1 AA", "Visual regression", "VPAT / ACR"],
    "Integrations": ["Shopify Admin GraphQL", "Stripe", "ShipStation", "Resend", "Cal.com", "Revit API"],
    "Systems & Security": ["Row-Level Security design", "Active Directory", "VMware vCenter / ESXi", "Clonezilla imaging", "Cloudflare Turnstile", "Webhook HMAC verification"]
  },

  education: {
    school: "Western Michigan University",
    degree: "B.S. Computer Science",
    when: "Expected April 2028",
    gpa: "4.0",
    honors: [
      "Global Education Undergraduate Merit Scholarship: $10,000/yr × 4",
      "Dean's List every semester"
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

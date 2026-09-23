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
    "At Electric Trident I lead the engineering: production web apps on Next.js and Supabase, AI features built with real guardrails, Postgres row-level security as the authorization layer, and Playwright-tested releases. I also wrote the engineering standards every one of our client repos follows."
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
        "Co-founded a software consultancy with a fellow WMU student, built around three service pillars: Business Requirements & Scope, Development, and IT / Maintenance.",
        "Work directly with clients to gather requirements, define scope, and deliver fixed-price or retainer-based solutions, from marketing sites to full web applications.",
        "Provide ongoing infrastructure support, maintenance, and fractional CTO services for early-stage teams and small businesses across West Michigan.",
        "Lead full-stack and AI engineering across client engagements. Beyond the selected work above, built Liminal Vantage, an expert-booking marketplace with three auth flows, a 30+ table Postgres schema secured by row-level policies, ~31 Deno edge functions for Stripe and booking webhooks, and an LLM recommendation chatbot with prompt-injection defenses.",
        "Authored ET-Framework, the engineering-standards kit every ET repo ships with. It loads automatically into our AI coding agent's context each session, so every client project is built, tested, and reviewed the same way.",
        "ET-Framework's security playbook spans 9 threat categories (auth and sessions, IDOR, injection, SSRF, trust boundaries, abuse, secrets and supply chain, prompt injection, RAG data leakage), and every rule is backed by a documented real-world incident.",
        "It also includes an 11-section, build-ordered guide for LLM features (prompt assembly, untrusted-context fencing, retrieval and tool use, output validation, streaming, cost controls, testing non-deterministic systems), a Playwright + axe-core testing standard, and a token-based design-system standard with accessibility as the floor.",
        "Defined \"the Feature Dance,\" a 6-step ship cycle (build, Playwright test, visual report, document, feed the lesson back, PR), and a casebook of 10 postmortems that turn real incidents (an RLS privilege escalation, a 3-day production outage, a bot-abuse attack) into codified rules, including RLS-first authorization as the default on every project."
      ]
    },
    {
      role: "Research Programmer",
      org: "Dr. Lina Sawalha Research Team, WMU Electrical & Computer Engineering",
      where: "Kalamazoo, MI",
      when: "Jun 2026 - Present",
      metric: { v: "48", k: "graphics test configs" },
      bullets: [
        "Sole developer on the benchmark harness for an NSF-funded mobile GPU rendering energy study that follows the group's IEEE IISWC 2025 publication (Unity, C#, Python, ADB), taken as an ECE 4900 independent study.",
        "Diagnosed and fixed 15 defects in an inherited Unity mobile-rendering benchmark that had never run successfully, delivering a fully automated, sentinel-verified Android test harness.",
        "Designed a JSON-driven config system generating 48 graphics-settings test configurations across 15 rendering parameters, exactly reproducing a published academic study design.",
        "Ported the benchmark from Unity 2020.3 to Unity 6.3 and added measurement support for FSR upscaling and Temporal Anti-Aliasing.",
        "Found and fixed a measurement-validity bug in a predecessor team's published benchmark: a hardcoded anti-aliasing pass was silently running in every \"disabled\" test configuration.",
        "Built a Python orchestration and analysis toolchain from scratch (config generation, device-readiness checks, automated sweeps, results reporting). Next up: on-device energy profiling with Gator performance counters and Perfetto power-rail capture."
      ]
    },
    {
      role: "Research Programmer",
      org: "Dr. Hexu Liu Research Team, WMU",
      where: "Kalamazoo, MI",
      when: "Sep 2025 - Jan 2026",
      bullets: [
        "Built AI Revit Copilot, a modular system that turns natural-language commands into safe, validated Revit API actions.",
        "Implemented context extraction and prompt composition so the AI is aware of the live Revit model state (RAG).",
        "Refactored the extension from modal to modeless by moving Revit API operations behind the ExternalEvent pattern, so users keep working while automations run safely (no more \"invalid API context\" failures or UI blocking).",
        "Implemented rule-based 3D model generation: the LLM recognizes structural keywords (wall, floor, ceiling) and requires each one's parameters (length, height, thickness) from a strict rules file derived from the Revit documentation.",
        "Logged every action and output through a feedback and auditing pipeline for transparency and debugging."
      ]
    },
    {
      role: "System Administrator",
      org: "WMU College of Engineering",
      where: "Kalamazoo, MI",
      when: "Jan 2025 - Present",
      bullets: [
        "Led the migration of college-owned devices to Active Directory, enabling secure role-based user-profile management for students, faculty, and staff.",
        "Manage virtualized infrastructure for engineering software and license servers with VMware vCenter and ESXi, using vSphere for remote administration.",
        "Migrated the CATIA license server from a virtual machine to a dedicated physical host.",
        "Administer and maintain engineering software across student labs, faculty offices, and research systems through centralized license servers on Windows Server.",
        "Built and maintain a centralized file-sharing server that gives labs, faculty, and research staff secure, organized access to shared resources.",
        "Create, customize, and deploy standardized PC and laptop images with Clonezilla and the college image servers.",
        "Design and manage specialized system images for faculty research and lab environments with unique software requirements.",
        "Manage onboarding and offboarding of faculty and staff devices, keeping configurations secure and compliant.",
        "Provide IT support for software licensing, installation, and troubleshooting, and maintain the college's lab, office, and specialized research machines."
      ]
    },
    {
      role: "Web Developer",
      org: "Developer Club at WMU",
      where: "Kalamazoo, MI",
      when: "Mar 2025 - Present",
      bullets: [
        "Designed and maintain the Events feature on the club's official site (T3 stack: Next.js, TypeScript, tRPC, Prisma, NextAuth), with Firebase-backed CRUD for event data.",
        "Independently built a Django community site for the Town of Berwyn, IL, with an events calendar, newsletter signup, and a secure admin panel, which earned the club a $600 donation.",
        "Built the admin flow so non-technical staff can update site content without touching source code."
      ]
    },
    {
      role: "Computer Technician / IT Support",
      org: "Kalamazoo Valley Community College",
      where: "Kalamazoo, MI",
      when: "Jun 2023 - Apr 2025",
      metric: { v: "500+", k: "laptops re-imaged per semester" },
      bullets: [
        "Wrote a Python script to automate user-profile cleanup on college-owned Windows systems, with error recovery, robust exception handling, and detailed logging.",
        "Oversaw re-imaging of 500+ loaner laptops each semester, coordinating with departments and tracking devices by serial number and asset tag.",
        "Set up and maintained computer classrooms and lab stations in the Dental Hygiene Building each semester, including hardware inspection, cable management, and ethernet labeling.",
        "Provided day-to-day support for user accounts, Microsoft Office, wireless connectivity, and devices by phone, email, and in person."
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

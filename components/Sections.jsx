"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReveal, LiveClock, Counter } from "./Cursor";

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, shown] = useReveal(0.12);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function SectionLabel({ n, title }) {
  return (
    <div className="section-label">
      <span className="mono num">{n}</span>
      <span className="rule" />
      <span className="mono title">{title}</span>
    </div>
  );
}

export function Hero({ data }) {
  const nameRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (nameRef.current) {
        nameRef.current.style.transform = `translateY(${y * -0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="mono hero-meta">
            <span className="dot-live" /> available · sophomore @ wmu · <LiveClock />
          </div>
          <h1 ref={nameRef} className="hero-name">
            <span className="line">Arriza</span>
            <span className="line accent-italic">Wibowo<span className="accent-dot">.</span></span>
          </h1>
          <p className="hero-role mono">{data.role}</p>
          <p className="hero-tag">{data.tagline}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" data-cursor="link">
              <span>view selected work</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square"/></svg>
            </a>
            <a href="#contact" className="btn btn-ghost" data-cursor="link">get in touch</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-frame" data-cursor="view">
            <Image
              className="photo-img"
              src="/assets/portrait.jpg"
              alt="Arriza Wibowo"
              width={420}
              height={525}
              priority
            />
            <div className="photo-corner tl" />
            <div className="photo-corner tr" />
            <div className="photo-corner bl" />
            <div className="photo-corner br" />
            <div className="photo-tag mono">
              <span className="accent">●</span> {data.location}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="marquee-group">
              <span>Full-Stack</span><span className="acc">●</span>
              <span>AI Tooling</span><span className="acc">●</span>
              <span>Django</span><span className="acc">●</span>
              <span>T3 Stack</span><span className="acc">●</span>
              <span>Python</span><span className="acc">●</span>
              <span>System Admin</span><span className="acc">●</span>
              <span>Revit API</span><span className="acc">●</span>
            </span>
          ))}
        </div>
      </div>
      <div className="scroll-hint mono">
        <span>scroll</span>
        <span className="hint-bar" />
      </div>
    </header>
  );
}

export function About({ data }) {
  return (
    <section id="about" className="section section-about">
      <SectionLabel n="01" title="about" />
      <div className="about-grid">
        <div className="about-copy">
          {data.about.map((p, i) => (
            <Reveal key={i} delay={i * 80} as="p" className="about-p">{p}</Reveal>
          ))}
        </div>
        <Reveal className="about-stats" delay={120}>
          <div className="stat">
            <div className="stat-num"><Counter to={4.0} decimals={1} /></div>
            <div className="stat-label mono">gpa</div>
          </div>
          <div className="stat">
            <div className="stat-num"><Counter to={10} suffix="+" /></div>
            <div className="stat-label mono">shipped projects</div>
          </div>
          <div className="stat">
            <div className="stat-num"><Counter to={8} /></div>
            <div className="stat-label mono">wins & medals</div>
          </div>
          <div className="stat">
            <div className="stat-num"><Counter to={3} /></div>
            <div className="stat-label mono">years coding</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const GRADUAI_SHOTS = [
  { src: "/assets/graduai/01-dashboard.png", label: "Dashboard" },
  { src: "/assets/graduai/02-degree.png", label: "Degree Audit" },
  { src: "/assets/graduai/03-plan.png", label: "Plan Builder" },
  { src: "/assets/graduai/04-chat.png", label: "Chat Advisor" }
];

const TWEETER_SHOTS = [
  { src: "/assets/tweeter/01-feed.png", label: "Feed" },
  { src: "/assets/tweeter/02-new.png", label: "Compose" },
  { src: "/assets/tweeter/03-profile.png", label: "Edit Profile" }
];

function ShotCarousel({ shots, hover, tilt, theme = "light" }) {
  const [idx, setIdx] = useState(0);
  const n = shots.length;

  useEffect(() => {
    if (hover) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [hover, n]);

  const go = (e, delta) => {
    e.preventDefault(); e.stopPropagation();
    setIdx((i) => (i + delta + n) % n);
  };
  const jump = (e, i) => {
    e.preventDefault(); e.stopPropagation();
    setIdx(i);
  };

  return (
    <div
      className={`mock mock-graduai mock-carousel-${theme}`}
      style={{ transform: `translate(${tilt.x * 4}px, ${tilt.y * 4}px)` }}
    >
      <div className={`cara-frame cara-frame-${theme}`}>
        {shots.map((s, i) => (
          <Image
            key={i}
            src={s.src}
            alt={s.label}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={`cara-img ${i === idx ? "is-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
            style={{ objectFit: "contain" }}
          />
        ))}
        <button className="cara-btn cara-prev" onClick={(e) => go(e, -1)} data-cursor="link" aria-label="Previous screenshot">‹</button>
        <button className="cara-btn cara-next" onClick={(e) => go(e, 1)} data-cursor="link" aria-label="Next screenshot">›</button>
        <div className="cara-label mono">
          <span className="cara-num">{String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
          <span className="cara-name">{shots[idx].label}</span>
        </div>
      </div>
      <div className="cara-dots">
        {shots.map((_, i) => (
          <button key={i} className={`cara-dot ${i === idx ? "is-active" : ""}`} onClick={(e) => jump(e, i)} data-cursor="link" aria-label={`Go to ${shots[i].label}`} />
        ))}
      </div>
    </div>
  );
}

function ScreenshotMockup({ src, alt, hover, tilt, theme = "light" }) {
  return (
    <div
      className={`mock mock-shot mock-shot-${theme}`}
      style={{ transform: `translate(${tilt.x * 4}px, ${tilt.y * 4}px) scale(${hover ? 1.02 : 1})` }}
    >
      <Image className="shot-img" src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "contain" }} loading="lazy" />
    </div>
  );
}

function ProjectMockup({ id, hover, tilt }) {
  if (id === "graduai") return <ShotCarousel shots={GRADUAI_SHOTS} hover={hover} tilt={tilt} theme="light" />;
  if (id === "revit-copilot") return <ScreenshotMockup src="/assets/revit-copilot.png" alt="Revit Copilot UI" hover={hover} tilt={tilt} theme="dark" />;
  if (id === "ytsave") return <ScreenshotMockup src="/assets/ytsave.png" alt="YTSave web app" hover={hover} tilt={tilt} theme="dark" />;
  if (id === "tweeter") return <ShotCarousel shots={TWEETER_SHOTS} hover={hover} tilt={tilt} theme="dark" />;
  return null;
}

function FeaturedProject({ p, idx }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const odd = idx % 2 === 1;

  return (
    <Reveal as="article" className={`fproj ${odd ? "fproj-flip" : ""}`} delay={idx * 60}>
      <div
        ref={ref}
        className="fproj-card"
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
        style={{
          transform: hover ? `perspective(1200px) rotateX(${-tilt.y * 2}deg) rotateY(${tilt.x * 2}deg)` : "perspective(1200px)"
        }}
        data-cursor="view"
      >
        <div className="fproj-vis">
          <div className="fproj-num mono">{p.n}</div>
          <ProjectMockup id={p.id} hover={hover} tilt={tilt} />
        </div>
        <div className="fproj-body">
          <div className="fproj-head">
            <h3 className="fproj-name">{p.name}</h3>
            <span className="mono fproj-year">{p.year}</span>
          </div>
          <p className="fproj-sub">{p.sub}</p>
          <p className="fproj-blurb">{p.blurb}</p>
          <ul className="fproj-details">
            {p.details.map((d, i) => (
              <li key={i}><span className="mono bullet">→</span> {d}</li>
            ))}
          </ul>
          <div className="fproj-stack">
            {p.stack.map((s) => <span key={s} className="chip mono">{s}</span>)}
          </div>
          <div className="fproj-meta">
            <span className="mono muted">{p.role}</span>
            {p.links.length > 0 && (
              <div className="fproj-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link" data-cursor="link">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FeaturedProjects({ data }) {
  return (
    <section id="projects" className="section section-projects">
      <SectionLabel n="02" title="selected work" />
      <div className="fproj-list">
        {data.featured.map((p, i) => <FeaturedProject key={p.id} p={p} idx={i} />)}
      </div>
      <Reveal className="github-cta">
        <a href="https://github.com/ArriZa-Wi" target="_blank" rel="noreferrer" className="gh-card" data-cursor="view">
          <div className="gh-left">
            <div className="gh-label mono">— more on github</div>
            <div className="gh-title">See the rest of what I&apos;ve built.</div>
            <div className="gh-sub">From Django clones to T3 apps to Python automation scripts. The full archive lives at <span className="mono accent">github.com/ArriZa-Wi</span>.</div>
          </div>
          <div className="gh-right">
            <svg className="gh-mark" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
              <path d="M32 1A32 32 0 0 0 21.88 63.34c1.6.29 2.18-.7 2.18-1.54 0-.76-.03-2.78-.04-5.46-8.9 1.93-10.78-4.29-10.78-4.29-1.45-3.7-3.55-4.69-3.55-4.69-2.9-1.98.22-1.94.22-1.94 3.21.23 4.9 3.3 4.9 3.3 2.85 4.88 7.48 3.47 9.31 2.65.29-2.06 1.12-3.47 2.03-4.27-7.11-.8-14.58-3.56-14.58-15.83 0-3.5 1.25-6.36 3.3-8.6-.33-.81-1.43-4.06.31-8.47 0 0 2.69-.86 8.81 3.28A30.66 30.66 0 0 1 32 16.4c2.72.01 5.46.37 8.02 1.07 6.12-4.14 8.81-3.28 8.81-3.28 1.74 4.41.65 7.66.32 8.47 2.06 2.24 3.29 5.1 3.29 8.6 0 12.3-7.49 15.02-14.62 15.81 1.15.99 2.18 2.93 2.18 5.9 0 4.27-.04 7.71-.04 8.76 0 .85.57 1.85 2.2 1.53A32 32 0 0 0 32 1Z"/>
            </svg>
            <span className="gh-arrow mono">visit github ↗</span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

export function Experience({ data }) {
  return (
    <section id="experience" className="section section-experience">
      <SectionLabel n="03" title="experience" />
      <div className="xp-list">
        {data.experience.map((x, i) => (
          <Reveal key={i} as="div" className="xp-row" delay={i * 50}>
            <div className="xp-when mono">{x.when}</div>
            <div className="xp-body">
              <div className="xp-head">
                <h3 className="xp-role">{x.role}</h3>
                <span className="xp-org">
                  {x.orgHref ? (
                    <a href={x.orgHref} target="_blank" rel="noreferrer" className="xp-org-link" data-cursor="link">
                      {x.org} <span className="mono accent">↗</span>
                    </a>
                  ) : x.org}
                  <span className="muted mono"> · {x.where}</span>
                </span>
                {x.metric && (
                  <span className="xp-metric mono">
                    <span className="xp-metric-v">{x.metric.v}</span>
                    <span className="xp-metric-k">{x.metric.k}</span>
                  </span>
                )}
              </div>
              <ul className="xp-bullets">
                {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AwardLogo({ id }) {
  if (id === "python") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M8 14 L16 24 L8 34" /><path d="M18 14 L26 24 L18 34" /><path d="M28 14 L36 24 L28 34" /><line x1="6" y1="38" x2="42" y2="38" />
      </svg>
    );
  }
  if (id === "django") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <ellipse cx="24" cy="12" rx="14" ry="4" /><path d="M10 12 V24 a14 4 0 0 0 28 0 V12" /><path d="M10 24 V36 a14 4 0 0 0 28 0 V24" />
        <line x1="20" y1="20" x2="20" y2="20" strokeWidth="4" strokeLinecap="round" /><line x1="28" y1="20" x2="28" y2="20" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "erp") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
        <line x1="8" y1="40" x2="42" y2="40" /><rect x="10" y="28" width="6" height="12" /><rect x="20" y="20" width="6" height="20" /><rect x="30" y="10" width="6" height="30" />
        <polyline points="13,26 23,18 33,8" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (id === "arduino") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="10" y="14" width="28" height="20" />
        <line x1="6" y1="20" x2="10" y2="20" /><line x1="6" y1="28" x2="10" y2="28" /><line x1="38" y1="20" x2="42" y2="20" /><line x1="38" y1="28" x2="42" y2="28" />
        <circle cx="18" cy="24" r="2" /><circle cx="30" cy="24" r="2" /><line x1="20" y1="24" x2="28" y2="24" />
      </svg>
    );
  }
  if (id === "wmu-hack") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" strokeLinecap="square">
        <path d="M26 6 L12 28 H22 L18 42 L36 18 H26 L30 6 Z" />
      </svg>
    );
  }
  if (id === "scholarship") {
    return (
      <svg className="aw-logo" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter">
        <path d="M24 6 L28 18 L40 20 L31 28 L34 40 L24 34 L14 40 L17 28 L8 20 L20 18 Z" />
      </svg>
    );
  }
  return null;
}

export function Awards({ data }) {
  return (
    <section id="awards" className="section section-awards">
      <SectionLabel n="04" title="competitions & honors" />
      <Reveal className="awards-intro">
        <p>Six medals across four years at the <a href="https://mwc3.org" target="_blank" rel="noreferrer" className="link">Midwest Collegiate Computing Conference</a>, a hackathon win at WMU, and a four-year scholarship that brought me here. Each card links out to the competition page.</p>
      </Reveal>
      <div className="awards-grid">
        {data.awards.map((aw, i) => (
          <Reveal key={aw.id} as="div" className="award-card-wrap" delay={i * 50}>
            <a className={`award-card aw-${aw.id}`} href={aw.href} target="_blank" rel="noreferrer" data-cursor="link">
              <div className="aw-head">
                <AwardLogo id={aw.id} />
                <span className="aw-arrow mono">↗</span>
              </div>
              <div className="aw-body">
                <div className="aw-conf-tag mono">{aw.conf}</div>
                <h3 className="aw-name">{aw.name}</h3>
                <p className="aw-blurb">{aw.blurb}</p>
              </div>
              <div className="aw-foot">
                <ul className="aw-places">
                  {aw.placements.map((pl, j) => (
                    <li key={j} className="aw-place-row" data-place={pl.place}>
                      <span className="aw-place-chip">{pl.place}</span>
                      <span className="aw-place-year mono">{pl.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills({ data }) {
  return (
    <section id="skills" className="section section-skills">
      <SectionLabel n="05" title="stack" />
      <div className="skills-grid">
        {Object.entries(data.skills).map(([cat, items], i) => (
          <Reveal key={cat} as="div" className="skill-block" delay={i * 50}>
            <div className="skill-cat mono">— {cat.toLowerCase()}</div>
            <div className="skill-items">
              {items.map((s) => (
                <span key={s} className="skill-pill" data-cursor="link">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education({ data }) {
  return (
    <section id="education" className="section section-education">
      <SectionLabel n="06" title="education" />
      <Reveal className="edu-row">
        <div className="edu-left">
          <h3 className="edu-school">{data.education.school}</h3>
          <p className="edu-degree">{data.education.degree}</p>
          <p className="mono muted">{data.education.when} · GPA {data.education.gpa}</p>
        </div>
        <ul className="edu-honors">
          {data.education.honors.map((h, i) => (
            <li key={i}><span className="mono bullet">★</span> {h}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Contact({ data }) {
  return (
    <section id="contact" className="section section-contact">
      <SectionLabel n="07" title="get in touch" />
      <div className="contact-wrap">
        <Reveal className="contact-head">
          <h2 className="contact-title">
            Let&apos;s <span className="accent-italic">build</span> something.
          </h2>
          <p className="contact-blurb">
            I&apos;m always open to internships, freelance, or just a conversation about software. Email is the fastest — usually a reply within a day.
          </p>
        </Reveal>
        <Reveal className="contact-cards" delay={120}>
          <a href={`mailto:${data.email}`} className="contact-card contact-card-primary" data-cursor="link">
            <div className="cc-label mono">email · primary</div>
            <div className="cc-value">{data.email}</div>
            <div className="cc-arrow mono">↗ open mail</div>
          </a>
          <a href={data.github} target="_blank" rel="noreferrer" className="contact-card" data-cursor="link">
            <div className="cc-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 .3a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 10 .3"/>
              </svg>
            </div>
            <div className="cc-meta">
              <div className="cc-label mono">github</div>
              <div className="cc-value">@ArriZa-Wi</div>
            </div>
            <div className="cc-arrow mono">↗</div>
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="contact-card" data-cursor="link">
            <div className="cc-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M16.5 16.5h-2.85v-4.46c0-1.06-.02-2.43-1.48-2.43-1.48 0-1.71 1.16-1.71 2.35v4.54H7.6V7.25h2.74v1.26h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.42 1.9 3.42 4.37v5.1ZM4.4 5.99a1.66 1.66 0 1 1 0-3.33 1.66 1.66 0 0 1 0 3.33Zm1.43 10.51H2.97V7.25h2.86v9.25ZM17.93 0H2.07A2.04 2.04 0 0 0 0 2.02v15.96A2.04 2.04 0 0 0 2.07 20h15.86A2.04 2.04 0 0 0 20 17.98V2.02A2.04 2.04 0 0 0 17.93 0Z"/>
              </svg>
            </div>
            <div className="cc-meta">
              <div className="cc-label mono">linkedin</div>
              <div className="cc-value">in/arriza-wibowo</div>
            </div>
            <div className="cc-arrow mono">↗</div>
          </a>
          <a href={`tel:${data.phone}`} className="contact-card" data-cursor="link">
            <div className="cc-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 3 H7 L9 8 L7 9 a8 8 0 0 0 4 4 L12 11 L17 13 V16 a1 1 0 0 1 -1 1 A14 14 0 0 1 3 4 a1 1 0 0 1 1 -1 Z" strokeLinejoin="miter"/>
              </svg>
            </div>
            <div className="cc-meta">
              <div className="cc-label mono">phone</div>
              <div className="cc-value">{data.phone}</div>
            </div>
            <div className="cc-arrow mono">↗</div>
          </a>
          <a href="/Resume_Arriza.pdf" target="_blank" rel="noreferrer" className="contact-card contact-card-resume" data-cursor="link">
            <div className="cc-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 2 H12 L16 6 V18 H5 Z" strokeLinejoin="miter"/>
                <path d="M12 2 V6 H16"/>
                <line x1="7" y1="10" x2="14" y2="10"/>
                <line x1="7" y1="13" x2="14" y2="13"/>
                <line x1="7" y1="16" x2="11" y2="16"/>
              </svg>
            </div>
            <div className="cc-meta">
              <div className="cc-label mono">resume</div>
              <div className="cc-value">download .pdf</div>
            </div>
            <div className="cc-arrow mono">↗</div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-name mono">© {new Date().getFullYear()} · arriza wibowo</div>
        <div className="footer-mid mono">
          <span>made with next.js + react</span>
          <span className="dim">·</span>
          <span>press <kbd>`</kbd> for terminal</span>
        </div>
        <a href="#hero" className="back-top mono" data-cursor="link">↑ back to top</a>
      </div>
    </footer>
  );
}

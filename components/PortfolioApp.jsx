"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA, SECTIONS } from "@/lib/data";
import { Cursor } from "@/components/Cursor";
import { Terminal } from "@/components/Terminal";
import { ThemeProvider } from "@/components/ThemeToggle";
import { Hero, About, FeaturedProjects, Experience, Awards, Skills, Education, Contact, Footer } from "@/components/Sections";

function SideNav({ active }) {
  return (
    <nav className="sidenav" aria-label="Section navigation">
      <a href="#hero" className="sn-mark" data-cursor="link">
        <span className="sn-mark-aw">aw</span>
        <span className="sn-mark-dot" />
      </a>
      <ul className="sn-list">
        {SECTIONS.map((s, i) => (
          <li key={s.id} className={`sn-item ${active === s.id ? "is-active" : ""}`}>
            <a href={`#${s.id}`} data-cursor="link">
              <span className="sn-num mono">{String(i).padStart(2, "0")}</span>
              <span className="sn-label mono">{s.label}</span>
              <span className="sn-bar" />
            </a>
          </li>
        ))}
      </ul>
      <div className="sn-foot">
        <a href="https://github.com/ArriZa-Wi" target="_blank" rel="noreferrer" data-cursor="link" className="mono">gh ↗</a>
      </div>
    </nav>
  );
}

function TopBar({ active }) {
  return (
    <div className="topbar">
      <a href="#hero" className="tb-name mono" data-cursor="link">arriza wibowo</a>
      <div className="tb-active mono">
        <span className="tb-dot accent">●</span>
        <span>{SECTIONS.find((s) => s.id === active)?.label || "intro"}</span>
      </div>
      <a href="/Resume_Arriza.pdf" target="_blank" rel="noreferrer" className="tb-resume mono" data-cursor="link">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M3 1 H7 L9 3 V11 H3 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="miter" />
          <path d="M7 1 V3 H9" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span>resume</span>
        <span className="tb-resume-arrow">↗</span>
      </a>
    </div>
  );
}

function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress-bar" style={{ transform: `scaleX(${p})` }} />;
}

export default function PortfolioApp() {
  const data = PORTFOLIO_DATA;
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <Progress />
      <Cursor />
      <Terminal />
      <SideNav active={active} />
      <TopBar active={active} />
      <main className="main">
        <Hero data={data} />
        <About data={data} />
        <FeaturedProjects data={data} />
        <Experience data={data} />
        <Awards data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Contact data={data} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

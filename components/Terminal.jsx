"use client";

import { useEffect, useRef, useState } from "react";

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "out", text: "arriza@portfolio ~ % an interactive terminal — explore the site by typing." },
    { type: "out", text: "type `help` to see all commands, or try `awards`, `projects`, `github`." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "`" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [history, open]);

  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    let out;
    if (!c) return;
    if (c === "help") out = "available: about, projects, awards, contact, github, resume, clear, whoami, sudo, exit";
    else if (c === "about") out = "CS sophomore @ WMU. Full-stack + IT. Building GraduAI. 4.0 GPA.";
    else if (c === "projects") out = "1. revit-copilot  2. tweeter  3. ytsave  4. graduai  5. berwyn-site";
    else if (c === "awards") out = "MWC3: 1st python '26, 1st django '26, 3rd arduino '26, 2nd arduino '25, 1st erp '24, 1st erp + python '23.";
    else if (c === "contact") out = "arrizafathi@gmail.com · 269-312-9154 · @ArriZa-Wi";
    else if (c === "github") { window.open("https://github.com/ArriZa-Wi", "_blank"); out = "→ opening github.com/ArriZa-Wi"; }
    else if (c === "resume") { window.open("/Resume_Arriza.pdf", "_blank"); out = "→ opening resume.pdf"; }
    else if (c === "whoami") out = "guest@arriza-portfolio";
    else if (c === "sudo") out = "Permission denied. nice try.";
    else if (c.startsWith("sudo ")) out = "nope.";
    else if (c === "clear") { setHistory([]); return; }
    else if (c === "exit") { setOpen(false); return; }
    else if (c === "ls") out = "about/  projects/  awards/  contact/  resume.pdf";
    else if (c === "cat secret.txt" || c === "secret") out = "you found it. take care of yourself today.";
    else out = `zsh: command not found: ${c}. try \`help\`.`;
    setHistory((h) => [...h, { type: "in", text: c }, { type: "out", text: out }]);
  };

  if (!open) return (
    <button className="term-toggle" onClick={() => setOpen(true)} data-cursor="link" aria-label="Open terminal">
      <span className="term-toggle-kbd mono">`</span>
      <span className="term-toggle-text">
        <span className="ttx-main mono">try the terminal</span>
        <span className="ttx-sub mono">type <span className="accent">help</span> · awards · projects</span>
      </span>
    </button>
  );

  return (
    <div className="terminal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="terminal">
        <div className="term-head">
          <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
          <span className="term-title mono">arriza@portfolio — zsh</span>
          <button className="term-close" onClick={() => setOpen(false)}>esc</button>
        </div>
        <div className="term-body mono">
          {history.map((line, i) => (
            <div key={i} className={`term-line term-${line.type}`}>
              {line.type === "in" ? <span className="term-prompt">~ % </span> : null}
              {line.text}
            </div>
          ))}
          <div className="term-line term-input-line">
            <span className="term-prompt">~ % </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") { run(input); setInput(""); }
              }}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}

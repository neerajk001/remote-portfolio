"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const experienceItems = [
  {
    period: "Aug 2025 — Present",
    role: "Full-Stack Developer",
    company: "Webvision Softech Pvt Ltd",
    location: "Mumbai",
    description:
      "Working as a full-stack developer building web applications and contributing to client projects. Responsible for developing and maintaining multiple web applications using modern technologies.",
    responsibilities: [
      "Developing full-stack web applications",
      "Collaborating with team on client projects",
      "Code reviews and optimization",
      "Building responsive UIs",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    period: "2024 — 2025",
    role: "Freelance Developer",
    company: "Vectorio.dev",
    location: "Mumbai",
    description:
      "Started freelancing during third year of college, building projects for clients and running my own digital agency. Focused on delivering high-quality web solutions.",
    responsibilities: [
      "Client project delivery",
      "Full-cycle web development",
      "Business development",
      "Managing client relationships",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
];

type ExperienceItem = (typeof experienceItems)[number];

const builtItems = [
  {
    title: "SaaS Dashboard",
    summary: "Realtime analytics with auth and API integrations",
    github: "https://github.com/",
    live: "https://vectorio.dev",
    description:
      "A modern web application built with cutting-edge technologies. Showcases full-stack development with a focus on user experience and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Responsive design",
      "Real-time updates",
      "Authentication system",
      "API integration",
    ],
  },
  {
    title: "Task Management App",
    summary: "Mobile-first task manager with offline support",
    github: "https://github.com/",
    live: "https://vectorio.dev",
    description:
      "An innovative mobile-first application for seamless task management. Built with a clean architecture and modern tooling.",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
    features: [
      "Drag and drop interface",
      "Offline support",
      "Push notifications",
      "Dark mode",
    ],
  },
];

type BuiltItem = (typeof builtItems)[number];

const educationItems = [
  {
    period: "2022 — 2026",
    degree: "B.Tech in Computer Science",
    institution: "Shree L.R. Tiwari College of Engineering",
    location: "Mumbai",
  },
];

const techStack = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Go",
  "PostgreSQL",
  "Framer Motion",
];

const beliefs = [
  "Speed matters — ship fast, iterate faster.",
  "Simple beats clever. Delete code before adding it.",
  "Design is how it works, not how it looks.",
];

type Theme = "dark" | "light";
type TabId = "experience" | "built" | "education";
type Selection =
  | { kind: "project"; item: BuiltItem }
  | { kind: "experience"; item: ExperienceItem }
  | null;

const EMAIL = "hello@vectorio.dev";

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.8.61-3.39-1.35-3.39-1.35-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.09 2.93.84.09-.65.35-1.09.64-1.35-2.23-.25-4.58-1.12-4.58-4.97 0-1.1.39-2 1.04-2.7-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.77 1.03a9.6 9.6 0 0 1 2.52-.34c.85 0 1.72.12 2.52.34 1.92-1.3 2.77-1.03 2.77-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.7 0 3.86-2.35 4.71-4.59 4.96.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.79V21h-4V9Z" />
    </svg>
  );
}

function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.9 3H21l-6.9 7.89L22 21h-6.2l-4.86-6.33L5.3 21H3l7.41-8.46L2 3h6.35l4.4 5.78L18.9 3Zm-1.08 16.2h1.9L7.62 4.7H5.6l12.22 14.5Z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ExternalIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark"
  );
  const [selection, setSelection] = useState<Selection>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // storage unavailable — theme still applies for this session
    }
  }, [theme]);

  const closeDrawer = useCallback(() => setSelection(null), []);

  useEffect(() => {
    if (!selection) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selection, closeDrawer]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const tabs: { id: TabId; label: string }[] = [
    { id: "experience", label: "Experience" },
    { id: "built", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <div id="top" className="min-h-screen">
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-3 pb-28 pt-6 sm:gap-6 sm:px-8 sm:pt-14 lg:max-w-6xl lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-8">
        {/* ---------- Left column (sticky profile on desktop) ---------- */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-6 lg:sticky lg:top-8">
        {/* ---------- Profile ---------- */}
        <header className="profile-card">
          <Image
            className="profile-avatar"
            src="/pic.png"
            alt="Portrait of Neeraj Kushwaha"
            width={240}
            height={240}
            priority
          />
          <div className="profile-content">
            <span className="availability-badge">
              <span className="availability-dot" aria-hidden="true" />
              Available for work
            </span>
            <h1 className="profile-name">Neeraj Kushwaha</h1>
            <p className="profile-role">Full-Stack Developer</p>
            <p className="profile-meta">
              Mumbai, India · Building AI systems and web experiments
            </p>
            <div className="profile-socials" aria-label="Social links">
              <a
                className="profile-social"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="h-[17px] w-[17px]" />
              </a>
              <a
                className="profile-social"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="h-[17px] w-[17px]" />
              </a>
              <a
                className="profile-social"
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
              >
                <XIcon className="h-[17px] w-[17px]" />
              </a>
              <a
                className="profile-social"
                href={`mailto:${EMAIL}`}
                aria-label={`Email ${EMAIL}`}
              >
                <MailIcon className="h-[17px] w-[17px]" />
              </a>
            </div>
          </div>
          <div className="profile-actions">
            <a className="btn-primary" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="btn-secondary" href="#work">
              View My Work
            </a>
          </div>
        </header>
        </div>

        {/* ---------- Right column (content on desktop) ---------- */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
        {/* ---------- About ---------- */}
        <section id="about" aria-labelledby="about-heading" className="panel">
          <h2 id="about-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">
            About
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-[0.95rem] leading-relaxed t-muted">
            <p>
              I&apos;m Neeraj — a full-stack developer in Mumbai. I learned by
              hacking around on the internet and now I build web apps and AI
              experiments, mostly with Next.js and TypeScript.
            </p>
            <p>
              Previously freelancing through{" "}
              <a
                href="https://vectorio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 t-fg hover:opacity-80"
              >
                Vectorio.dev
              </a>
              , now full-time at Webvision Softech. Open to freelance work on
              the side.
            </p>
            <details className="group rounded-xl border border-[var(--border)] p-4">
              <summary className="cursor-pointer text-sm font-semibold t-fg">
                Things I believe in
              </summary>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {beliefs.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--faint)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section id="work" aria-labelledby="work-heading" className="panel">
          <h2 id="work-heading" className="sr-only">
            Work
          </h2>
          <div role="tablist" aria-label="Work history" className="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={activeTab === t.id}
                className="tab"
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === "experience" && (
            <div role="tabpanel" className="divider mt-2">
              {experienceItems.map((item) => (
                <button
                  key={`${item.role}-${item.company}`}
                  type="button"
                  className="row-button"
                  onClick={() =>
                    setSelection({ kind: "experience", item })
                  }
                  aria-label={`${item.role} at ${item.company}, view details`}
                >
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="eyebrow">{item.period}</span>
                    <span className="text-lg font-semibold tracking-tight">
                      {item.role}
                    </span>
                    <span className="text-sm t-muted">{item.company}</span>
                    <span className="mt-1 inline-flex items-center gap-2">
                      <span className="chip">{item.location}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] t-faint">
                        View details
                      </span>
                    </span>
                  </span>
                  <span className="row-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          )}

          {activeTab === "built" && (
            <div role="tabpanel" className="divider mt-2">
              {builtItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="row-button"
                  onClick={() => setSelection({ kind: "project", item })}
                  aria-label={`${item.title}, view details`}
                >
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </span>
                    <span className="text-sm t-muted">{item.summary}</span>
                    <span className="mt-1 flex flex-wrap gap-1.5">
                      {item.tech.slice(0, 3).map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="row-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div role="tabpanel" className="divider mt-2">
              {educationItems.map((item) => (
                <div
                  key={`${item.degree}-${item.institution}`}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <span className="eyebrow">{item.period}</span>
                    <span className="text-lg font-semibold tracking-tight">
                      {item.degree}
                    </span>
                    <span className="text-sm t-muted">{item.institution}</span>
                  </div>
                  <span className="chip shrink-0">{item.location}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ---------- Stack ---------- */}
        <section id="stack" aria-labelledby="stack-heading" className="panel">
          <h2
            id="stack-heading"
            className="text-xs font-bold uppercase tracking-[0.14em] t-faint"
          >
            My go-to tech stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {techStack.map((item) => (
              <li key={item} className="chip chip-static">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" aria-labelledby="contact-heading" className="panel">
          <h2 id="contact-heading" className="text-xl font-semibold tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="mt-2 text-sm leading-relaxed t-muted">
            Currently open to freelance projects and full-time-adjacent
            collaborations. Fastest way to reach me is email.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a className="btn-primary" href={`mailto:${EMAIL}`}>
              <MailIcon className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              className="btn-secondary"
              href="https://vectorio.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vectorio.dev
              <ExternalIcon className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer className="px-2 text-center text-xs t-faint lg:text-left">
          © {new Date().getFullYear()} Neeraj Kushwaha · Mumbai, India
        </footer>
        </div>
      </main>

      {/* ---------- Detail drawer (single instance) ---------- */}
      <div
        className={`drawer fixed inset-y-0 right-0 z-30 w-full transition-transform duration-300 ease-in-out sm:max-w-[560px] ${
          selection ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selection}
        aria-label={
          selection
            ? selection.kind === "project"
              ? selection.item.title
              : `${selection.item.role} at ${selection.item.company}`
            : "Details"
        }
        inert={!selection}
      >
        <div className="flex h-full flex-col overflow-y-auto p-6 sm:p-8">
          <button
            ref={closeButtonRef}
            onClick={closeDrawer}
            type="button"
            className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] t-muted transition hover:text-[var(--foreground)]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {selection?.kind === "project" && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {selection.item.title}
                </h3>
                <p className="mt-1 text-sm t-muted">{selection.item.summary}</p>
              </div>
              <p className="leading-relaxed t-muted">{selection.item.description}</p>
              <div>
                <h4 className="eyebrow mb-3">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selection.item.tech.map((t) => (
                    <span key={t} className="chip chip-static">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="eyebrow mb-3">Features</h4>
                <ul className="flex flex-col gap-2">
                  {selection.item.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm t-muted">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={selection.item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <GitHubIcon className="h-4 w-4" />
                  View code
                </a>
                <a
                  href={selection.item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live demo
                  <ExternalIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

          {selection?.kind === "experience" && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {selection.item.role}
                </h3>
                <p className="mt-1 t-muted">{selection.item.company}</p>
                <p className="eyebrow mt-2">{selection.item.period} · {selection.item.location}</p>
              </div>
              <p className="leading-relaxed t-muted">{selection.item.description}</p>
              <div>
                <h4 className="eyebrow mb-3">Responsibilities</h4>
                <ul className="flex flex-col gap-2">
                  {selection.item.responsibilities.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm t-muted">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="eyebrow mb-3">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selection.item.tech.map((t) => (
                    <span key={t} className="chip chip-static">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {selection && (
        <div
          className="drawer-backdrop fixed inset-0 z-20"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* ---------- Dock: in-page nav only (no dead links) ---------- */}
      <nav aria-label="Page sections" className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex justify-center px-4">
        <div className="dock pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 backdrop-blur">
          <a aria-label="Back to top" className="dock-btn" href="#top">
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 10v10h14V10" />
              <path d="M9 20v-6h6v6" />
            </svg>
          </a>
          <a aria-label="About" className="dock-btn" href="#about">
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
            </svg>
          </a>
          <a aria-label="Work" className="dock-btn" href="#work">
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </a>
          <a aria-label="Tech stack" className="dock-btn" href="#stack">
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m8 8-5 4 5 4" />
              <path d="m16 8 5 4-5 4" />
              <path d="m13 4-2 16" />
            </svg>
          </a>
          <a aria-label={`Email ${EMAIL}`} className="dock-btn" href={`mailto:${EMAIL}`}>
            <MailIcon />
          </a>
          <span aria-hidden="true" className="h-6 w-px bg-[var(--border)]" />
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="dock-btn"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 0 12 6.5 6.5 0 0 1-6.5 6A9 9 0 1 1 12 3Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

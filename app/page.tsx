"use client";

import { useState } from "react";

const experienceItems = [
  {
    period: "2022 — pres",
    role: "Senior Product Engineer",
    company: "Luminal Tech Systems",
    location: "remote",
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Developer",
    company: "Aether Digital Agency",
    location: "mumbai",
  },
  {
    period: "2019 — 2020",
    role: "Junior Web Architect",
    company: "Nexus Cloud Solutions",
    location: "mumbai",
  },
];

const builtItems = [
  {
    title: "Project 1",
    detail: "view in detail",
    github: "#",
    live: "#",
  },
  {
    title: "Project 2",
    detail: "view in detail",
    github: "#",
    live: "#",
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

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "built">(
    "experience"
  );
  return (
    <div className="page-shell min-h-screen">
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 pb-36 pt-20 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold lowercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            hii neeraj here
          </h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            present: mumbai
          </div>
        </div>

        <section id="about" className="flex max-w-3xl flex-col gap-5 pt-10">
          <h2 className="text-2xl font-semibold lowercase tracking-tight text-white sm:text-3xl">
            about
          </h2>
          <p className="text-base text-white/60">
            tldr; learnt by hacking around on the internet.
          </p>
          <p className="text-base text-white/70">
            I like technology. It makes a dent in the universe.
          </p>
          <p className="text-base text-white/70">
            I write code agentically. A lot of it.
          </p>
          <p className="text-base text-white/70">
            Speed ran content across socials when I was young.
          </p>
          <p className="text-base text-white/70">
            Right now I just build stuff!
          </p>
          <p className="text-base text-white/70">
            If you want to know more about me,{" "}
            <span className="underline underline-offset-4">
              here are somethings I believe in.
            </span>
          </p>
        </section>

        <section id="experience" className="pt-12">
          <div className="flex items-center gap-8 border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            <button
              className={`pb-4 transition ${
                activeTab === "experience"
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
              onClick={() => setActiveTab("experience")}
              type="button"
            >
              experience
            </button>
            <button
              className={`pb-4 transition ${
                activeTab === "built"
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
              onClick={() => setActiveTab("built")}
              type="button"
            >
              stuff i built
            </button>
          </div>
          {activeTab === "experience" ? (
            <div className="mt-6 divide-y divide-white/5">
              {experienceItems.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {item.period}
                    </span>
                    <div className="text-lg font-semibold text-white">
                      {item.role}
                    </div>
                    <div className="text-sm text-white/50">{item.company}</div>
                  </div>
                  <div className="flex w-full items-center justify-end gap-4">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/50">
                      {item.location}
                    </span>
                    <span className="text-lg text-white/50">↗</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 divide-y divide-white/5">
              {builtItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 py-6"
                >
                  <div className="flex flex-col gap-1">
                    <div className="text-lg font-semibold text-white">
                      {item.title}
                    </div>
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {item.detail}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      aria-label="GitHub repository"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/40 hover:text-white"
                      href={item.github}
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.687-.217.687-.483 0-.236-.009-.862-.014-1.692-2.796.608-3.387-1.35-3.387-1.35-.458-1.165-1.118-1.475-1.118-1.475-.914-.624.069-.612.069-.612 1.01.071 1.544 1.037 1.544 1.037.897 1.537 2.353 1.093 2.927.836.092-.65.35-1.093.636-1.345-2.232-.254-4.58-1.116-4.58-4.968 0-1.097.392-1.995 1.036-2.697-.104-.254-.449-1.277.098-2.66 0 0 .845-.27 2.768 1.03a9.59 9.59 0 0 1 2.52-.339c.855.004 1.717.115 2.52.339 1.922-1.3 2.766-1.03 2.766-1.03.548 1.383.203 2.406.1 2.66.645.702 1.035 1.6 1.035 2.697 0 3.86-2.352 4.71-4.59 4.96.359.31.679.92.679 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.482A10 10 0 0 0 12 2Z" />
                      </svg>
                    </a>
                    <a
                      aria-label="Live demo"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/40 hover:text-white"
                      href={item.live}
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="stack" className="pt-12">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            my go to tech stack
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <nav className="pointer-events-none fixed inset-x-0 bottom-6 z-20 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur">
          <a
            aria-label="Home"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 10v10h14V10" />
              <path d="M9 20v-6h6v6" />
            </svg>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <a
            aria-label="Notes"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="#about"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M8 4h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8" />
              <path d="M8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2" />
              <path d="M9 8h8" />
              <path d="M9 12h8" />
              <path d="M9 16h6" />
            </svg>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <a
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.687-.217.687-.483 0-.236-.009-.862-.014-1.692-2.796.608-3.387-1.35-3.387-1.35-.458-1.165-1.118-1.475-1.118-1.475-.914-.624.069-.612.069-.612 1.01.071 1.544 1.037 1.544 1.037.897 1.537 2.353 1.093 2.927.836.092-.65.35-1.093.636-1.345-2.232-.254-4.58-1.116-4.58-4.968 0-1.097.392-1.995 1.036-2.697-.104-.254-.449-1.277.098-2.66 0 0 .845-.27 2.768 1.03a9.59 9.59 0 0 1 2.52-.339c.855.004 1.717.115 2.52.339 1.922-1.3 2.766-1.03 2.766-1.03.548 1.383.203 2.406.1 2.66.645.702 1.035 1.6 1.035 2.697 0 3.86-2.352 4.71-4.59 4.96.359.31.679.92.679 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.482A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.79V21h-4V9Z" />
            </svg>
          </a>
          <a
            aria-label="X"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.9 3H21l-6.9 7.89L22 21h-6.2l-4.86-6.33L5.3 21H3l7.41-8.46L2 3h6.35l4.4 5.78L18.9 3Zm-1.08 16.2h1.9L7.62 4.7H5.6l12.22 14.5Z" />
            </svg>
          </a>
          <a
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            href="mailto:hello@example.com"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
              <path d="m22 8-10 6L2 8" />
            </svg>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <button
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 3a6 6 0 0 0 0 12 6.5 6.5 0 0 1-6.5 6A9 9 0 1 1 12 3Z" />
              <path d="m16 5 .7-1.2" />
              <path d="m18 8 1.2-.7" />
              <path d="m18 12 1.2.7" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const experienceItems = [
  {
    period: "aug 2025 — pres",
    role: "Full-Stack Developer",
    company: "Webvision Softech Pvt Ltd",
    location: "mumbai",
    detail: "view in detail",
    description: "Working as a full-stack developer building web applications and contributing to client projects. Responsible for developing and maintaining multiple web applications using modern technologies.",
    responsibilities: ["Developing full-stack web applications", "Collaborating with team on client projects", "Code reviews and optimization", "Building responsive UIs"],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    period: "2024 — 2025",
    role: "Freelance Developer",
    company: "Vectorio.dev",
    location: "mumbai",
    detail: "view in detail",
    description: "Started freelancing during third year of college, building projects for clients and running my own digital agency. Focused on delivering high-quality web solutions.",
    responsibilities: ["Client project delivery", "Full-cycle web development", "Business development", "Managing client relationships"],
    tech: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
];

type ExperienceItem = (typeof experienceItems)[number];

const builtItems = [
  {
    title: "Project 1",
    detail: "view in detail",
    github: "#",
    live: "#",
    description: "A modern web application built with cutting-edge technologies. This project showcases full-stack development skills with a focus on user experience and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: ["Responsive design", "Real-time updates", "Authentication system", "API integration"],
    image: "/projects/project1.png",
  },
  {
    title: "Project 2",
    detail: "view in detail",
    github: "#",
    live: "#",
    description: "An innovative mobile-first application designed for seamless task management. Built with a clean architecture and modern tooling.",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
    features: ["Drag and drop interface", "Offline support", "Push notifications", "Dark mode"],
    image: "/projects/project2.png",
  },
];

type BuiltItem = (typeof builtItems)[number];

const educationItems = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Shree LR Tiwari College of Engineering",
    location: "mumbai",
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

type Theme = "dark" | "light";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "built" | "education"
  >("experience");
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedProject, setSelectedProject] = useState<BuiltItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const nextTheme: Theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersLight
          ? "light"
          : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="page-shell min-h-screen">
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 pb-36 pt-20 sm:px-10 lg:px-16">
        <div className="dotted-panel w-full flex flex-col gap-4">
          <h1 className="text-4xl font-semibold lowercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            hii neeraj here
          </h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            present: mumbai
          </div>
        </div>

        <div className="dotted-panel w-full flex flex-col gap-3 pt-8 pb-2">
          <p className="text-sm text-white/50 tracking-wide">
            building AI systems + web experiments
          </p>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            status: online
          </div>
        </div>

        <section
          id="about"
          className="dotted-panel w-full flex flex-col gap-5 pt-10"
        >
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
            Also available for freelance work{" "}
            <a
              href="https://vectorio.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white/90 hover:text-white transition"
            >
              → vectorio.dev
            </a>
          </p>
          <p className="text-base text-white/70">
            If you want to know more about me,{" "}
            <span className="underline underline-offset-4">
              here are somethings I believe in.
            </span>
          </p>
        </section>

        <section id="experience" className="dotted-panel w-full pt-12">
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
            <button
              className={`pb-4 transition ${
                activeTab === "education"
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
              onClick={() => setActiveTab("education")}
              type="button"
            >
              education
            </button>
          </div>
          {activeTab === "experience" && (
            <div className="mt-6 divide-y divide-white/5">
              {experienceItems.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="flex flex-col gap-4 py-6 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
                >
                  <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {item.period}
                    </span>
                    <div className="text-lg font-semibold text-white">
                      {item.role}
                    </div>
                    <div className="text-sm text-white/50">{item.company}</div>
                    <button
                      onClick={() => setSelectedExperience(item)}
                      className="text-xs uppercase tracking-[0.35em] text-white/40 hover:text-white/70 transition text-left cursor-pointer mt-1"
                    >
                      {item.detail}
                    </button>
                  </div>
                  <div className="flex shrink-0 items-center justify-end gap-4 sm:justify-self-end">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/50">
                      {item.location}
                    </span>
                    <span className="text-lg text-white/50">↗</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "built" && (
            <div className="mt-6 divide-y divide-white/5">
              {builtItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 py-6 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
                >
                  <div className="flex min-w-0 flex-col gap-1">
                    <div className="text-lg font-semibold text-white">
                      {item.title}
                    </div>
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="text-xs uppercase tracking-[0.35em] text-white/40 hover:text-white/70 transition text-left cursor-pointer"
                    >
                      {item.detail}
                    </button>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 sm:justify-self-end">
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
          {activeTab === "education" && (
            <div className="mt-6 divide-y divide-white/5">
              {educationItems.map((item) => (
                <div
                  key={`${item.degree}-${item.institution}`}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {item.period}
                    </span>
                    <div className="text-lg font-semibold text-white">
                      {item.degree}
                    </div>
                    <div className="text-sm text-white/50">{item.institution}</div>
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
          )}
        </section>

        <section id="stack" className="dotted-panel w-full pt-12">
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

      {/* Project Detail Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-30 w-full md:w-[min(42vw,680px)] bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6 sm:p-8">
          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-white/60 hover:text-white transition mb-8"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-xs uppercase tracking-[0.35em]">Back</span>
          </button>

          {selectedProject && (
            <div className="flex flex-col gap-6">
              {/* Image Placeholder */}
              <div className="aspect-video rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                <span className="text-white/30 text-sm">Project Screenshot</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.15em] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">
                  Features
                </h4>
                <ul className="flex flex-col gap-2">
                  {selectedProject.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={selectedProject.github}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/40 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.687-.217.687-.483 0-.236-.009-.862-.014-1.692-2.796.608-3.387-1.35-3.387-1.35-.458-1.165-1.118-1.475-1.118-1.475-.914-.624.069-.612.069-.612 1.01.071 1.544 1.037 1.544 1.037.897 1.537 2.353 1.093 2.927.836.092-.65.35-1.093.636-1.345-2.232-.254-4.58-1.116-4.58-4.968 0-1.097.392-1.995 1.036-2.697-.104-.254-.449-1.277.098-2.66 0 0 .845-.27 2.768 1.03a9.59 9.59 0 0 1 2.52-.339c.855.004 1.717.115 2.52.339 1.922-1.3 2.766-1.03 2.766-1.03.548 1.383.203 2.406.1 2.66.645.702 1.035 1.6 1.035 2.697 0 3.86-2.352 4.71-4.59 4.96.359.31.679.92.679 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.482A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
                <a
                  href={selectedProject.live}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/40 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Experience Detail Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-30 w-full md:w-[min(42vw,680px)] bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
          selectedExperience ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6 sm:p-8">
          <button
            onClick={() => setSelectedExperience(null)}
            className="flex items-center gap-2 text-white/60 hover:text-white transition mb-8"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-xs uppercase tracking-[0.35em]">Back</span>
          </button>

          {selectedExperience && (
            <div className="flex flex-col gap-6">
              {/* Role */}
              <h3 className="text-2xl font-semibold text-white">
                {selectedExperience.role}
              </h3>

              {/* Company & Period */}
              <div className="flex flex-col gap-1">
                <span className="text-white/70">{selectedExperience.company}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                  {selectedExperience.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {selectedExperience.description}
              </p>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">
                  Responsibilities
                </h4>
                <ul className="flex flex-col gap-2">
                  {selectedExperience.responsibilities.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-white/60 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.15em] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {(selectedProject || selectedExperience) && (
        <div
          className="fixed inset-0 z-25 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => {
            setSelectedProject(null);
            setSelectedExperience(null);
          }}
        />
      )}

      <nav className="pointer-events-none fixed inset-x-0 bottom-6 z-20 flex justify-center px-4">
        <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur">
          <a
            aria-label="Home"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Home
            </span>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <a
            aria-label="Blog"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Blog
            </span>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <a
            aria-label="GitHub"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              GitHub
            </span>
          </a>
          <a
            aria-label="LinkedIn"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>
          <a
            aria-label="X"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              X
            </span>
          </a>
          <a
            aria-label="Email"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
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
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Mail
            </span>
          </a>
          <span className="h-6 w-px bg-white/10" />
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? (
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
              </svg>
            )}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Mode
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

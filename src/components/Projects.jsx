import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Github, ExternalLink, Layers } from 'lucide-react';
import { SectionHeading, Reveal, Chip } from './MaskedText';
import ProjectModal from './ProjectModal';
import { projects, projectCategories } from '../data/portfolioData';

function ProjectRow({ project, i, onSelect }) {
  const flip = i % 2 === 1;

  return (
    <Reveal delay={0.05}>
      <article
        data-testid={`project-card-${project.id}`}
        className="group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      >
        {/* Project Visual Image Showcase */}
        <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <div
            onClick={() => onSelect(project)}
            className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 transition-all duration-700 group-hover:border-emerald-400/40 group-hover:shadow-[0_24px_80px_rgba(16,185,129,0.18)]"
          >
            <div className="aspect-[16/10] overflow-hidden bg-surface">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.06]"
              />
            </div>

            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />

            {/* Metric highlight badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 rounded-full glass px-3.5 py-2 font-mono text-[10px] sm:text-[11px] text-emerald-300 border border-emerald-400/20 shadow-lg">
                <TrendingUp size={13} className="text-glow shrink-0" />
                <span className="truncate">{project.metric}</span>
              </div>
              <span className="hidden sm:inline-flex rounded-full glass px-3 py-1 font-mono text-[10px] text-slate-300">
                Click to inspect
              </span>
            </div>
          </div>
        </div>

        {/* Project Text and Details */}
        <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <p className="font-mono text-xs tracking-[0.3em] text-emerald-400 uppercase font-semibold">
            {project.index} — {project.category}
          </p>

          <h3
            onClick={() => onSelect(project)}
            className="mt-3.5 flex items-start gap-2 font-display text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white transition-colors duration-300 group-hover:text-emerald-300 cursor-pointer"
          >
            <span>{project.title}</span>
            <ArrowUpRight
              size={24}
              className="mt-1 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-300"
            />
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => onSelect(project)}
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-400/20 hover:text-emerald-300 hover:border-emerald-400/40 border border-white/10 transition-all cursor-pointer"
            >
              <Layers size={13} />
              <span>Details</span>
            </button>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="04"
            label="Selected work"
            title="Featured projects & engineering systems"
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs font-mono text-[11px] uppercase tracking-[0.2em] leading-relaxed text-slate-500 lg:text-right">
              Production systems shipped across HSE petroleum, hospitality, fintech ERP & telecom
            </p>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-2.5 border-b border-white/10 pb-5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-neon text-obsidian font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    : "border border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects List */}
        <div className="mt-16 space-y-20 lg:space-y-28">
          <AnimatePresence mode="wait">
            {filteredProjects.map((p, i) => (
              <ProjectRow
                key={p.id}
                project={p}
                i={i}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, TrendingUp, CheckCircle } from 'lucide-react';
import { Chip } from './MaskedText';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl glass-elevated rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 rounded-full border border-white/15 bg-obsidian/70 p-2 text-slate-300 hover:text-white hover:border-emerald-400 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                {project.category}
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Metric pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
              <TrendingUp size={14} />
              <span>{project.metric}</span>
            </div>

            {/* Description */}
            <p className="text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Key Achievements */}
            {project.highlights && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Features & Architecture
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-glow transition-all hover:shadow-[0_0_24px_rgba(0,255,157,0.4)]"
              >
                <span>Live Preview</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:border-emerald-400/60 hover:text-emerald-300 transition-all"
              >
                <Github size={14} />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

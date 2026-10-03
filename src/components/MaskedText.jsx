import React from 'react';
import { motion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.75, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, label, title, className = "" }) => (
  <div className={className}>
    <Reveal>
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-emerald-400">
        <span className="h-px w-10 bg-emerald-400/60" />
        <span>{index} — {label}</span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
    </Reveal>
  </div>
);

export const Chip = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-slate-300 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/5 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] ${className}`}
  >
    {children}
  </span>
);

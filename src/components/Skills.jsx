import React from 'react';
import {
  MonitorSmartphone,
  Boxes,
  ServerCog,
  Database,
  BrainCircuit,
} from 'lucide-react';
import { SectionHeading, Reveal, Chip } from './MaskedText';
import { skillGroups } from '../data/portfolioData';

const ICONS = {
  monitor: MonitorSmartphone,
  boxes: Boxes,
  server: ServerCog,
  database: Database,
  brain: BrainCircuit,
};

function SkillCard({ group, delay }) {
  const Icon = ICONS[group.icon] || Boxes;
  const isAiGroup = group.icon === 'brain';

  return (
    <Reveal delay={delay} className={group.span}>
      <div
        data-testid="skill-card-category"
        className={`group h-full glass rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between ${
          isAiGroup
            ? "border-cyan-400/30 bg-gradient-to-br from-cyan-500/[0.04] to-emerald-500/[0.03] hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
            : "hover:border-emerald-400/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
        }`}
      >
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <span
              className={`rounded-xl border p-2.5 transition-transform duration-500 group-hover:scale-110 ${
                isAiGroup
                  ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  : "border-emerald-400/20 bg-emerald-400/5 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              }`}
            >
              <Icon size={18} />
            </span>
            <div className="flex items-center gap-2">
              {isAiGroup && (
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-cyan-300 font-semibold">
                  3× Velocity
                </span>
              )}
              <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
                {group.index}
              </span>
            </div>
          </div>

          <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {group.title}
          </h3>

          {/* Skill Tag Badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {group.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>

        {/* Ambient progress indicator bar */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>{isAiGroup ? "Accelerated Workflows & Prototyping" : "Proficiency & Production Ready"}</span>
          <span
            className={`h-1.5 w-12 rounded-full overflow-hidden ${
              isAiGroup ? "bg-cyan-400/20" : "bg-emerald-400/20"
            }`}
          >
            <span
              className={`block h-full w-full rounded-full animate-pulse ${
                isAiGroup ? "bg-cyan-400" : "bg-emerald-400"
              }`}
            />
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            label="Arsenal"
            title="Engineering stack & technical skills"
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs font-mono text-[11px] uppercase tracking-[0.2em] leading-relaxed text-slate-500 lg:text-right">
              2+ Years battle-tested on production React 19, Next.js, and Node.js architectures
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div
          data-testid="skills-bento-grid"
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
        >
          {skillGroups.map((g, i) => (
            <SkillCard key={g.index} group={g} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { SectionHeading, Reveal } from './MaskedText';
import { experience, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="03"
              label="Career"
              title="Experience & education"
            />
            <Reveal delay={0.12} className="mt-6 hidden lg:block">
              <p className="text-slate-400 text-sm leading-relaxed">
                Proven track record delivering high-throughput enterprise systems, GIS telemetry viewers, and clean UI/UX flows.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Timeline Column */}
        <div className="lg:col-span-8">
          <div className="relative border-l border-white/10 pl-8 sm:pl-10 space-y-14">
            {/* Experience Items */}
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={0.06 * i}>
                <div data-testid={`exp-item-${job.id}`} className="relative group">
                  {/* Timeline Node Icon */}
                  <span
                    className={`absolute -left-[2.55rem] sm:-left-[3.05rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                      job.current
                        ? 'border-emerald-400 bg-emerald-400/20 shadow-[0_0_20px_rgba(0,255,157,0.5)] scale-110'
                        : 'border-white/20 bg-surface'
                    }`}
                  >
                    <Briefcase size={11} className={job.current ? 'text-glow' : 'text-slate-400'} />
                  </span>

                  {/* Period badge */}
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Calendar size={12} />
                      {job.period}
                    </p>
                    {job.current && (
                      <span className="rounded-full border border-glow/40 bg-glow/10 px-2.5 py-0.5 font-mono text-[10px] text-glow uppercase tracking-wider animate-pulse">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Job Title & Company */}
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-slate-300 font-medium">
                    {job.company}
                  </p>

                  {/* Bullet Point Achievements */}
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-400 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            {/* Education Highlight Card */}
            <Reveal delay={0.16}>
              <div
                data-testid="education-card-gec"
                className="relative glass rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-emerald-400/40 hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Timeline node */}
                <span className="absolute -left-[2.55rem] sm:-left-[3.05rem] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_16px_rgba(6,182,212,0.4)]">
                  <GraduationCap size={12} className="text-cyan-300" />
                </span>

                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300 font-semibold">
                    Academic Background
                  </p>
                  <span className="font-mono text-xs text-slate-500">2018 — 2024</span>
                </div>

                <div className="mt-6 space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                          {edu.degree}
                        </h4>
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300 font-semibold">
                          {edu.score}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-400">{edu.institution}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

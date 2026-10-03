import React from 'react';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { SectionHeading, Reveal, Chip } from './MaskedText';
import { about, profile } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        {/* Left Sticky Heading Column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="01"
              label="About me"
              title="The engineer behind the screen"
            />
            <Reveal delay={0.15} className="mt-6 hidden lg:block">
              <div className="flex items-center gap-3 text-slate-500 font-mono text-xs tracking-wider">
                <Compass size={16} className="text-emerald-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-8">
          {/* Lead Bio */}
          <Reveal>
            <p className="text-xl sm:text-2xl lg:text-[1.7rem] leading-snug font-medium text-slate-100">
              {about.lead}
            </p>
          </Reveal>

          {/* Detailed Paragraph */}
          <Reveal delay={0.1}>
            <p className="mt-8 text-base sm:text-lg leading-relaxed text-slate-400">
              {about.body}
            </p>
          </Reveal>

          {/* Current Focus Highlight Card */}
          <Reveal delay={0.16}>
            <div
              data-testid="about-now-card"
              className="mt-10 glass rounded-2xl p-6 sm:p-7 flex items-start gap-4 border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.04] to-transparent shadow-[0_10px_40px_rgba(16,185,129,0.06)]"
            >
              <span className="mt-0.5 rounded-xl bg-neon/10 border border-neon/30 p-2.5 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-semibold">
                  Current Role & Focus
                </p>
                <p className="mt-1.5 text-sm sm:text-base text-slate-200 font-medium">
                  {about.now}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Core Philosophy & Methodologies */}
          <Reveal delay={0.22}>
            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400" />
                Core Philosophy & Soft Skills
              </p>
              <div data-testid="about-soft-skills" className="mt-4 flex flex-wrap gap-2.5">
                {about.softSkills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Location / Remote Badge */}
          <Reveal delay={0.28}>
            <div className="mt-12 rounded-xl border border-white/5 bg-surface/30 p-4 font-mono text-xs tracking-widest text-slate-400 flex items-center justify-between flex-wrap gap-3">
              <span>BASED IN {profile.location.toUpperCase()}</span>
              <span className="text-emerald-400">● WORKING WORLDWIDE (REMOTE FRIENDLY)</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

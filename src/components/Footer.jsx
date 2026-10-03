import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import LogoMark from './Logo';
import { scrollToId } from '../hooks/useLenis';
import { profile } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/5 py-12 bg-obsidian overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <LogoMark size={30} />
          <div>
            <p className="font-display text-sm font-bold text-white">
              KIRAN<span className="text-emerald-400">.</span>THAKOR
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Senior Full-Stack & Frontend Engineer
            </p>
          </div>
        </div>

        {/* Center credits */}
        <div className="text-center font-mono text-[11px] text-slate-500">
          <p>© {currentYear} Thakor Kirankumar. Built with React 19, Tailwind CSS & Framer Motion.</p>
        </div>

        {/* Actions & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full border border-white/10 p-2 text-slate-400 hover:text-white hover:border-emerald-400/50 transition-colors"
          >
            <Github size={15} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full border border-white/10 p-2 text-slate-400 hover:text-white hover:border-emerald-400/50 transition-colors"
          >
            <Linkedin size={15} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Kiran"
            className="rounded-full border border-white/10 p-2 text-slate-400 hover:text-white hover:border-emerald-400/50 transition-colors"
          >
            <Mail size={15} />
          </a>

          <button
            onClick={() => scrollToId('home')}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-300 hover:border-emerald-400/60 hover:text-emerald-300 transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

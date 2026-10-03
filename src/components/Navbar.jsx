import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, FileDown } from 'lucide-react';
import LogoMark from './Logo';
import { scrollToId } from '../hooks/useLenis';
import { profile, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <>
      <motion.header
        data-testid="main-navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass shadow-2xl shadow-black/50 bg-obsidian/75' : 'border border-transparent'
          }`}
        >
          {/* Logo Brand */}
          <button
            data-testid="nav-logo-monogram"
            onClick={() => go('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <LogoMark
              size={34}
              className="transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-105"
            />
            <span className="font-display font-bold tracking-wide text-white text-sm sm:text-base">
              KIRAN<span className="text-emerald-400">.</span>THAKOR
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Open to work pill */}
            <span className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-dot" />
              Open to work
            </span>

            {/* Quick CV Download Button */}
            <a
              href="/Kiran_Thakor_CV.pdf"
              download="Thakor_Kirankumar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Thakor Kirankumar CV"
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-emerald-400/50 hover:text-white transition-all cursor-pointer"
            >
              <FileDown size={13} className="text-emerald-400" />
              CV
            </a>

            {/* CTA Talk Button */}
            <button
              data-testid="nav-cta-connect"
              onClick={() => go('contact')}
              className="hidden sm:flex items-center gap-1.5 rounded-full bg-neon px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-glow hover:shadow-[0_0_24px_rgba(0,255,157,0.4)] cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              data-testid="nav-mobile-menu-button"
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-full border border-white/10 p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(l.id)}
                  className="text-left font-display text-4xl font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer flex items-center"
                >
                  <span className="mr-3 font-mono text-sm text-emerald-400">0{i + 1}</span>
                  {l.label}
                </motion.button>
              ))}

              <a
                href="/Kiran_Thakor_CV.pdf"
                download="Thakor_Kirankumar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-emerald-300 w-fit"
              >
                <FileDown size={16} />
                Download CV (PDF)
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 font-mono text-xs tracking-wider text-slate-400 space-y-2">
              <p className="text-emerald-400">{profile.email}</p>
              <p>{profile.phone} — {profile.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

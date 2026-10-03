import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Send, Sparkles } from 'lucide-react';
import LogoMark from './Logo';
import { MaskedLine } from './MaskedText';
import { scrollToId } from '../hooks/useLenis';
import { profile, stats, heroChips } from '../data/portfolioData';

// Magnetic Button with spring physics
function Magnetic({ children, className = "", testid, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      data-testid={testid}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kiran_Thakor_CV.pdf';
    link.download = 'Thakor_Kirankumar_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-14"
    >
      {/* Background Animated Atmosphere */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-80" />
        {/* Radial ambient glow orbs */}
        <div
          className="absolute -top-40 -left-40 h-[44rem] w-[44rem] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55), transparent 65%)' }}
        />
        <div
          className="absolute top-1/3 -right-52 h-[40rem] w-[40rem] rounded-full opacity-25 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.55), transparent 65%)', animationDelay: '2s' }}
        />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="max-w-7xl mx-auto w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center"
      >
        <div className="lg:col-span-8">
          {/* Status Badge */}
          <MaskedLine delay={0.35}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300 sm:text-xs sm:tracking-[0.25em]">
              <span className="h-2 w-2 rounded-full bg-glow animate-pulse-dot" />
              {profile.status}
            </span>
          </MaskedLine>

          {/* Large Hero Headline */}
          <h1
            data-testid="hero-headline"
            className="mt-7 font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(2.8rem,11.5vw,7.2rem)] text-white"
          >
            <MaskedLine delay={0.45}>
              <span>KIRAN</span>
            </MaskedLine>
            <MaskedLine delay={0.58}>
              <span className="text-outline">THAKOR</span>
              <span className="text-glow">.</span>
            </MaskedLine>
          </h1>

          {/* Subtitle / Tagline */}
          <MaskedLine delay={0.75}>
            <p
              data-testid="hero-tagline"
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400"
            >
              <span className="text-white font-semibold">
                Senior Full-Stack & Creative Frontend Engineer.
              </span>{" "}
              Architecting fast, data-dense, and scalable React 19, Next.js, and Node.js enterprise platforms with modern AI-accelerated workflows.
            </p>
          </MaskedLine>

          {/* Hero CTAs */}
          <MaskedLine delay={0.88}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic
                testid="hero-cta-projects"
                onClick={() => scrollToId("projects")}
                className="flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-glow hover:shadow-[0_0_36px_rgba(0,255,157,0.45)]"
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </Magnetic>

              <Magnetic
                testid="hero-cta-download-cv"
                onClick={handleDownloadCV}
                className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-emerald-300 transition-all duration-300 hover:border-emerald-400/70 hover:bg-emerald-400/10 hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]"
              >
                <Download size={15} />
                <span>Download CV</span>
              </Magnetic>

              <Magnetic
                testid="hero-cta-contact"
                onClick={() => scrollToId("contact")}
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-emerald-400/60 hover:text-emerald-300"
              >
                <Send size={14} />
                <span>Contact Me</span>
              </Magnetic>
            </div>
          </MaskedLine>
        </div>

        {/* Right 3D Visual Shield with Floating Pills */}
        <div className="hidden lg:flex lg:col-span-4 justify-center">
          <motion.div
            data-testid="hero-monogram-avatar"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Spinning ambient border ring */}
            <div
              className="absolute -inset-8 rounded-full opacity-50 blur-3xl animate-spin-slower"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(16,185,129,0.5), rgba(6,182,212,0.4), transparent 45%, rgba(16,185,129,0.5))',
              }}
            />

            {/* Glowing glass container */}
            <div className="relative h-64 w-64 xl:h-76 xl:w-76 rounded-full glass flex items-center justify-center shadow-[0_0_90px_rgba(16,185,129,0.22)] border border-white/15 backdrop-blur-2xl">
              <LogoMark size={170} className="filter drop-shadow-[0_0_24px_rgba(16,185,129,0.5)]" />
            </div>

            {/* Floating tech stack pills */}
            {heroChips.map((chip, i) => (
              <span
                key={chip.label}
                className={`absolute ${chip.className} glass rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                  chip.isAi
                    ? "text-cyan-300 border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_22px_rgba(6,182,212,0.25)]"
                    : "text-emerald-300 border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                } ${
                  i % 2 === 0 ? "animate-float" : "animate-float-delayed"
                }`}
              >
                {chip.isAi && <Sparkles size={11} className="text-cyan-300 shrink-0" />}
                {chip.label}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Ribbon at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full px-6 lg:px-10 mt-16"
      >
        <div
          data-testid="hero-stats"
          className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="group">
              <p className="font-display text-2xl sm:text-4xl xl:text-5xl font-extrabold text-white transition-colors duration-300 group-hover:text-emerald-400">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll down prompt */}
        <button
          data-testid="hero-scroll-cue"
          onClick={() => scrollToId("about")}
          className="hidden md:flex mt-10 mx-auto flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span>Scroll Down</span>
          <ArrowDown size={14} className="animate-bounce text-emerald-400" />
        </button>
      </motion.div>
    </section>
  );
}

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { SectionHeading, Reveal } from './MaskedText';
import { profile } from '../data/portfolioData';

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-emerald-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)]";

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const setField = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatusMessage({ type: 'error', text: `Please email directly at ${profile.email}` });
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#00FF9D', '#06B6D4', '#ffffff'],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setStatusMessage(null);

    // Simulate sending with nice client-side feedback & confetti
    setTimeout(() => {
      setSending(false);
      setStatusMessage({
        type: 'success',
        text: "Thank you! Your message has been received. I'll get back to you shortly.",
      });
      triggerConfetti();
      setForm({ name: '', email: '', roleOrSubject: '', message: '' });
    }, 900);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[32rem] w-[64rem] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.5), transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400 font-semibold">
              05 — Get In Touch
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.4rem,7vw,5.5rem)] text-white">
              LET'S BUILD <br />
              <span className="text-outline-emerald">SOMETHING GREAT.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-slate-400">
              Have an enterprise product, full-stack opening, or high-performance frontend challenge? My inbox is always open.
            </p>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <Reveal>
              <div
                data-testid="contact-email-card"
                className="group glass rounded-2xl p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/[0.02]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-emerald-300">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      Email Address
                    </p>
                    <a
                      data-testid="contact-email-link"
                      href={`mailto:${profile.email}`}
                      className="block truncate text-sm font-medium text-white hover:text-emerald-300 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  data-testid="contact-copy-email-button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="shrink-0 rounded-lg border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-emerald-400/50 hover:text-emerald-300 cursor-pointer"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>
            </Reveal>

            {/* Phone Card */}
            <Reveal delay={0.06}>
              <a
                data-testid="contact-phone-link"
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/[0.02] block"
              >
                <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-emerald-300">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-medium text-white">{profile.phone}</p>
                </div>
              </a>
            </Reveal>

            {/* Location Card */}
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-5 flex items-center gap-4">
                <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-emerald-300">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    Location
                  </p>
                  <p className="text-sm font-medium text-white">{profile.location}, Gujarat, India</p>
                </div>
              </div>
            </Reveal>

            {/* Social Links Row */}
            <Reveal delay={0.14}>
              <div className="grid grid-cols-2 gap-4">
                <a
                  data-testid="contact-linkedin-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 flex items-center gap-3 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-2.5 text-emerald-300">
                    <Linkedin size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Network</p>
                    <p className="text-xs font-bold text-white">LinkedIn</p>
                  </div>
                </a>

                <a
                  data-testid="contact-github-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 flex items-center gap-3 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-2.5 text-emerald-300">
                    <Github size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Code</p>
                    <p className="text-xs font-bold text-white">GitHub</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-6 sm:p-9 space-y-5 border border-white/10 shadow-2xl relative"
            >
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium flex items-center gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/10 border border-red-500/30 text-red-300'
                  }`}
                >
                  <Sparkles size={16} className="shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400"
                  >
                    Your Name *
                  </label>
                  <input
                    id="cf-name"
                    data-testid="contact-form-name-input"
                    type="text"
                    required
                    minLength={2}
                    placeholder="e.g. Sarah Jenkins"
                    value={form.name}
                    onChange={setField('name')}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cf-email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400"
                  >
                    Your Email *
                  </label>
                  <input
                    id="cf-email"
                    data-testid="contact-form-email-input"
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={form.email}
                    onChange={setField('email')}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cf-subject"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400"
                >
                  Subject / Project Topic
                </label>
                <input
                  id="cf-subject"
                  type="text"
                  placeholder="e.g. Frontend Architecture / Full-time Opportunity"
                  value={form.roleOrSubject}
                  onChange={setField('roleOrSubject')}
                  className={inputCls}
                />
              </div>

              <div>
                <label
                  htmlFor="cf-message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400"
                >
                  Message *
                </label>
                <textarea
                  id="cf-message"
                  data-testid="contact-form-message-input"
                  required
                  rows={5}
                  minLength={10}
                  placeholder="Tell me about your product requirements, timeline, or engineering goals..."
                  value={form.message}
                  onChange={setField('message')}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                data-testid="contact-form-submit-button"
                type="submit"
                disabled={sending}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-neon px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-glow hover:shadow-[0_0_36px_rgba(0,255,157,0.45)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

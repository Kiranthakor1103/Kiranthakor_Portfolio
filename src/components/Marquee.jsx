import React from 'react';
import { marqueeItems } from '../data/portfolioData';

const Diamond = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    className="mx-6 shrink-0 text-emerald-400/80"
  >
    <rect
      x="2"
      y="2"
      width="6"
      height="6"
      transform="rotate(45 5 5)"
      fill="currentColor"
    />
  </svg>
);

export default function Marquee() {
  return (
    <section
      data-testid="marquee-ribbon"
      aria-label="Technology stack ticker"
      className="relative border-y border-white/5 bg-surface/40 py-6 overflow-hidden select-none"
    >
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {[0, 1].map((loop) => (
          <div
            key={loop}
            className="flex items-center"
            aria-hidden={loop === 1}
          >
            {marqueeItems.map((item, i) => (
              <span key={`${loop}-${item}`} className="flex items-center">
                <span
                  className={`font-display text-xl sm:text-3xl font-extrabold tracking-wider whitespace-nowrap transition-colors duration-300 ${
                    i % 2 === 0 ? 'text-white/85 hover:text-emerald-300' : 'text-outline hover:text-white'
                  }`}
                >
                  {item}
                </span>
                <Diamond />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

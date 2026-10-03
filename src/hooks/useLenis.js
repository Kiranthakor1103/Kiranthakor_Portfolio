import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export default function useLenis() {
  useEffect(() => {
    // Only initialize smooth scroll on non-reduced-motion environments
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset: -76,
      duration: 1.2,
    });
  } else {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

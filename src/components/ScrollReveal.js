'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll('[data-reveal]:not(.in)');
      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
      );

      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

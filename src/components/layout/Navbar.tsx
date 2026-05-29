'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { nav } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/[0.12] bg-black/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      )}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-[72px]">
        <a href="/" className="relative z-10" aria-label="Unit Zero — Home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-300 transition-colors hover:text-signal-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://docs.units.network" className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-300 hover:text-signal-300">
            Docs
          </a>
          <span className="h-4 w-px bg-white/10" aria-hidden />
          <a href="/launch" className="btn-primary !py-2 !px-4">
            Agent Marketplace
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.15] bg-white/[0.02] md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative h-3 w-4">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-4 bg-bone-100 transition-transform duration-300',
                open && 'translate-y-[6px] rotate-45'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-[6px] h-px w-4 bg-bone-100 transition-opacity',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-[12px] h-px w-4 bg-bone-100 transition-transform duration-300',
                open && '-translate-y-[6px] -rotate-45'
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-white/[0.12] bg-black/95 backdrop-blur-2xl"
            >
              <div className="container-edge flex flex-col gap-1 pb-8 pt-6">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-center justify-between border-b border-white/[0.04] py-4 font-display text-xl text-bone-100"
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden className="text-bone-400">
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </motion.a>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <a href="/launch" className="btn-primary w-full justify-center">
                    Agent Marketplace
                  </a>
                  <a href="https://docs.units.network" className="btn-ghost w-full justify-center">
                    Read the docs
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

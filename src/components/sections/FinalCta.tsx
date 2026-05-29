'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { GridBackdrop } from '@/components/visuals/GridBackdrop';

export function FinalCta() {
  return (
    <section id="launch" className="section relative overflow-hidden">
      <GridBackdrop variant="default" fade="radial" />

      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-signal-300/[0.10] via-plasma-500/[0.06] to-transparent blur-3xl" />
      </div>

      <div className="container-edge relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">12 — Begin</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 text-balance font-display text-display-xl tracking-tight text-bone-50">
              The agent economy is{' '}
              <span className="gradient-text-signal">already here.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-[17px] leading-relaxed text-bone-300 md:text-[19px]">
              Build on the network designed from first principles for autonomous software.
              Deploy your first agent in minutes. Settle on infrastructure that scales
              with you.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/launch" className="btn-primary !px-7 !py-3.5 text-[12px]">
                Start building
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://docs.units.network" target="_blank" rel="noopener noreferrer" className="btn-ghost !px-7 !py-3.5 text-[12px]">
                Read the documentation
              </a>
            </div>
          </Reveal>

          {/* Closing whisper */}
          <Reveal delay={0.4}>
            <motion.div
              className="mt-20 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500"
            >
              <span className="h-px w-12 bg-bone-500/40" />
              <span>Build for what comes next</span>
              <span className="h-px w-12 bg-bone-500/40" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

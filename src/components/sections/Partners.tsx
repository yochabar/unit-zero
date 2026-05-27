'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/ui/Reveal';

const nodeStats = [
  {
    value: '60',
    label: 'Generating nodes',
    sub: 'active block producers',
    accent: false,
  },
  {
    value: '5.24M',
    label: 'Blocks produced',
    sub: 'since genesis 2016',
    accent: true,
  },
  {
    value: '<23%',
    label: 'Top validator share',
    sub: 'no single entity dominates',
    accent: false,
  },
  {
    value: 'LPoS',
    label: 'Consensus',
    sub: 'Leased Proof of Stake',
    accent: false,
  },
  {
    value: '9+',
    label: 'Years running',
    sub: 'mainnet live since 2016',
    accent: false,
  },
  {
    value: '100M',
    label: 'WAVES supply',
    sub: 'fixed, fully distributed',
    accent: false,
  },
];

const marqueeItems = [
  'Leased Proof of Stake · energy efficient',
  '60 independent generating nodes',
  'No single validator above 23% share',
  '5,240,000+ blocks produced',
  'Community governed since 2016',
  'Global node distribution',
  'Open-source clients · audited',
  'Fixed 100M WAVES supply',
];

function WavesLogo() {
  return (
    <svg viewBox="0 0 80 50" fill="none" className="h-10 w-16" aria-label="Waves">
      <path
        d="M4 32 C10 10 18 44 26 22 C34 0 42 44 50 22 C58 0 66 44 76 22"
        stroke="#1E5FFF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Partners() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} id="partners" className="section relative">
      <div className="container-edge">

        {/* Header */}
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">11 — Partners</span>
          </Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-3xl font-display text-display-lg font-medium text-bone-50"
          >
            Backed and built by{' '}
            <span className="gradient-text-signal">a global network of operators.</span>
          </motion.h2>
        </div>

        {/* Main Waves card */}
        <Reveal delay={0.15}>
          <div className="relative mt-16 overflow-hidden rounded-sm border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-transparent">

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-signal-300/[0.05] blur-[100px]" />
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative flex flex-col gap-12 p-8 md:p-12 lg:flex-row lg:items-center lg:gap-16">

              {/* Left — Waves identity */}
              <div className="shrink-0 lg:w-72">
                <div className="mb-2 flex items-center gap-3">
                  <WavesLogo />
                  <span className="font-display text-[30px] font-semibold tracking-tight text-white">
                    Waves
                  </span>
                </div>

                <div className="mb-5 mt-1">
                  <span className="rounded-sm border border-blue-500/30 bg-blue-500/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400">
                    Infrastructure backer
                  </span>
                </div>

                <p className="text-[14px] leading-relaxed text-bone-300">
                  Unit Zero is built on the Waves ecosystem — a community-driven, open-source
                  blockchain running Leased Proof of Stake since 2016. Battle-tested, energy
                  efficient, and governed by its node operators.
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href="https://waves.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400/70 transition-colors hover:text-blue-400"
                  >
                    waves.tech
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                  <a
                    href="https://wavescap.com/nodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400/50 transition-colors hover:text-bone-200"
                  >
                    Live node data · wavescap.com/nodes
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right — node stats */}
              <div className="flex-1">
                <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
                  <span className="h-px w-4 bg-blue-500/50" />
                  Network decentralization · wavescap.com/nodes
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {nodeStats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative rounded-sm border p-4 ${
                        s.accent
                          ? 'border-signal-300/25 bg-signal-300/[0.05]'
                          : 'border-white/[0.07] bg-white/[0.02]'
                      }`}
                    >
                      {s.accent && (
                        <div className="absolute inset-x-0 top-0 h-px rounded-t-sm bg-gradient-to-r from-transparent via-signal-300/50 to-transparent" />
                      )}
                      <div className={`font-display text-[26px] font-medium leading-none ${s.accent ? 'text-signal-300' : 'text-white'}`}>
                        {s.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-300">
                        {s.label}
                      </div>
                      <div className="mt-0.5 font-mono text-[9px] text-bone-400/50">
                        {s.sub}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom strip — decentralization note */}
            <div className="relative border-t border-white/[0.06] px-8 py-4 md:px-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400/40">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500/60" />
                    Leased Proof of Stake
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500/60" />
                    No custodial lockup
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500/60" />
                    Open-source node software
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500/60" />
                    Fully permissionless
                  </span>
                </div>
                <span className="font-mono text-[9px] text-bone-400/30">
                  Data source: wavescap.com · updated live
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Marquee */}
        <Reveal delay={0.25}>
          <div className="mask-fade-x mt-12 overflow-hidden">
            <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-bone-400">
              {[...Array(2)].flatMap((_, n) =>
                marqueeItems.map((s, i) => (
                  <span key={`${n}-${i}`} className="flex items-center gap-12">
                    <span className="h-1 w-1 rounded-full bg-blue-500/60" />
                    {s}
                  </span>
                ))
              )}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

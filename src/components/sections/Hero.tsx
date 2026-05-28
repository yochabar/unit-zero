'use client';

import { motion } from 'framer-motion';
import { AgentMesh } from '@/components/visuals/AgentMesh';
import { GridBackdrop } from '@/components/visuals/GridBackdrop';
import { LiveStats } from '@/components/sections/LiveStats';

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 md:pt-40 lg:pt-44">
      {/* Layered background */}
      <GridBackdrop variant="fine" fade="radial" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <AgentMesh className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-[44%] opacity-90" />
      </div>
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-b from-transparent to-black" />

      <div className="container-edge relative z-10">
        {/* Announcement bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex justify-center"
        >
          <a
            href="https://explorer.unit0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.02] py-1.5 pl-1.5 pr-4 font-mono text-[11px] text-bone-300 backdrop-blur-md transition-colors hover:border-signal-300/30 hover:text-bone-100"
          >
            <span className="rounded-full bg-signal-300/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-signal-300">
              Live
            </span>
            <span>Unit Zero Mainnet · explorer.unit0.dev</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="opacity-60 transition-transform group-hover:translate-x-0.5">
              <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </a>
        </motion.div>

        {/* Headline */}
        <div className="mx-auto max-w-[68rem] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-balance font-display text-display-xl font-medium text-bone-50"
          >
            Infrastructure for
            <br className="hidden sm:inline" />{' '}
            <span className="gradient-text-signal">autonomous economies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-[17px] leading-relaxed text-bone-300 md:text-[19px]"
          >
            Unit Zero is the AI-native blockchain — a settlement layer built from the
            ground up for autonomous agents, machine-to-machine finance, and
            programmable economies that operate at machine speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="/launch" className="btn-primary">
              Agent Marketplace
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#developers" className="btn-ghost">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Read the docs
            </a>
          </motion.div>
        </div>

        {/* Live blockchain stats — polled every 30s from explorer.unit0.dev */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <LiveStats />
        </motion.div>
      </div>
    </section>
  );
}

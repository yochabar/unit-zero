'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const phases = [
  {
    q: 'Phase 01',
    t: 'Foundation',
    state: 'complete',
    items: [
      'Mainnet beta launch',
      'BFT consensus + sub-second finality',
      'UNIT0 issuance & staking',
      'Validator decentralization (1 → 120 nodes)',
    ],
  },
  {
    q: 'Phase 02',
    t: 'Agent runtime',
    state: 'current',
    items: [
      'TEE-attested execution environment',
      'Agent SDK v0.4 (TypeScript + Rust)',
      'Native AgentRegistry & DID',
      'Intent settlement (alpha)',
    ],
  },
  {
    q: 'Phase 03',
    t: 'Coordination layer',
    state: 'next',
    items: [
      'Solver markets & MEV-aware routing',
      'Reputation primitives',
      'Multi-agent atomic settlement',
      'Cross-chain agent bridges',
    ],
  },
  {
    q: 'Phase 04',
    t: 'Open machine economy',
    state: 'future',
    items: [
      'Permissionless agent issuance',
      'On-chain inference marketplaces',
      'Decentralized policy registries',
      'Agent-native L2 framework',
    ],
  },
];

const stateColor: Record<string, string> = {
  complete: 'bg-signal-300 text-black',
  current: 'bg-plasma-400 text-black',
  next: 'bg-white/20 text-bone-100',
  future: 'bg-white/[0.06] text-bone-400',
};

export function Roadmap() {
  return (
    <section id="roadmap" className="section relative">
      <div className="container-edge">
        <SectionHeader
          eyebrow="10 — Roadmap"
          title={
            <>
              From settlement layer{' '}
              <span className="text-bone-400">to</span>{' '}
              <span className="gradient-text-signal">open machine economy.</span>
            </>
          }
          description="A four-phase build-out across consensus, agent runtime, coordination, and economy. We&apos;re currently mid-Phase 2."
        />

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 md:left-[14px] md:block" />

          <div className="space-y-12 md:space-y-16">
            {phases.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                  {/* Left — phase marker */}
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                      className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center"
                    >
                      <div className={`h-3 w-3 rounded-full ${stateColor[p.state]} relative z-10`}>
                        {p.state === 'current' && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-plasma-400/60" />
                        )}
                      </div>
                      <div className="absolute h-7 w-7 rounded-full border border-white/10" />
                    </motion.div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                        {p.q}
                      </div>
                      <div className="mt-1 font-display text-[20px] tracking-tight text-bone-50">
                        {p.t}
                      </div>
                      <div className="mt-2">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${stateColor[p.state]}`}
                        >
                          {p.state}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right — items */}
                  <div className="surface noise-overlay p-6 md:p-8">
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-3 text-[14px] leading-relaxed text-bone-200"
                        >
                          <span className="mt-2 h-px w-3 flex-shrink-0 bg-bone-500" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

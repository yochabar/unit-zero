'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const metrics = [
  { v: '120k', s: 'TPS', l: 'Parallel execution ceiling' },
  { v: '380', s: 'ms', l: 'Average block finality' },
  { v: '$0.0001', s: '', l: 'Median tx cost' },
  { v: '99.99', s: '%', l: 'Mainnet beta uptime' },
];

const stack = [
  { t: 'Application', d: 'Agents · Intents · Wallets', accent: true },
  { t: 'Coordination', d: 'Registry · Policy engine · Reputation' },
  { t: 'Execution', d: 'Parallel VM · TEE-attested runtime' },
  { t: 'Settlement', d: 'BFT consensus · Sub-second finality' },
  { t: 'Data availability', d: 'Sharded DA · Light-client friendly' },
];

export function Infrastructure() {
  return (
    <section id="performance" className="section relative">
      <div className="container-edge">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="07 — Infrastructure"
              title={
                <>
                  Engineered for <span className="gradient-text-signal">machine-scale throughput.</span>
                </>
              }
              description="Unit Zero is built for sustained, concurrent agent activity — not bursts of human signing. Every component is benchmarked against agent workloads."
            />
          </div>

          {/* Architecture stack */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="surface noise-overlay p-2">
                <div className="px-5 pb-3 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                  Protocol stack
                </div>
                <div className="space-y-1.5 p-3">
                  {stack.map((s, i) => (
                    <motion.div
                      key={s.t}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.6 }}
                      className={`relative flex items-center justify-between rounded-xl border px-5 py-4 ${
                        s.accent
                          ? 'border-signal-300/30 bg-gradient-to-r from-signal-300/[0.08] to-transparent'
                          : 'border-white/[0.06] bg-white/[0.015]'
                      }`}
                    >
                      <div>
                        <div className="font-display text-[15px] text-bone-50">{s.t}</div>
                        <div className="mt-0.5 font-mono text-[11px] text-bone-400">{s.d}</div>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-500">
                        L{stack.length - i}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Big metrics */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.l} delay={i * 0.08}>
              <div className="relative h-full bg-ink-100 p-8 md:p-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-display-md tracking-tight text-bone-50">
                    {m.v}
                  </span>
                  {m.s && <span className="font-mono text-sm text-signal-300">{m.s}</span>}
                </div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                  {m.l}
                </div>
                {/* Bottom progress bar */}
                <div className="mt-6 h-px w-full bg-white/[0.06]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-signal-300 to-plasma-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${60 + i * 8}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

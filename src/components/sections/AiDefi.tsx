'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function AiDefi() {
  return (
    <section id="ai-defi" className="section relative overflow-hidden bg-ink-300/20">
      {/* Top hairline gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-signal-300/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-plasma-500/[0.05] blur-3xl" />

      <div className="container-edge relative">
        <SectionHeader
          eyebrow="06 — AI-native DeFi"
          align="center"
          title={
            <>
              Finance, operated <span className="gradient-text-signal">by software.</span>
            </>
          }
          description="Risk models that adapt in real time. Liquidity that reroutes itself. Treasuries that allocate without standing orders. DeFi on Unit Zero is not run by interfaces — it is run by agents."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {/* Big feature card */}
          <Reveal className="lg:col-span-7">
            <div className="surface noise-overlay relative h-full overflow-hidden p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="tag">Core capability</span>
                <span className="font-mono text-[10px] text-bone-500">→ /docs/intents</span>
              </div>

              <h3 className="mt-8 font-display text-display-md tracking-tight text-bone-50">
                Intent-based execution.
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bone-300">
                An agent declares an outcome — &ldquo;rebalance into target allocation
                with &lt;15 bps slippage&rdquo;. The network solves, prices, and
                atomically settles the optimal path across every protocol on Unit Zero.
              </p>

              {/* Intent flow visualisation */}
              <div className="mt-12">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  {/* Intent source */}
                  <div className="rounded-xl border border-white/10 bg-ink-200/80 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
                      Agent
                    </div>
                    <div className="mt-1 font-display text-[14px] text-bone-50">
                      treasury-bot
                    </div>
                  </div>

                  {/* Path animation */}
                  <div className="relative h-12">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2"
                        animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2.4,
                          delay: i * 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{ left: 0, right: 0, width: '100%' }}
                      >
                        <span className="block h-1.5 w-1.5 rounded-full bg-signal-300 shadow-[0_0_8px_#9fe0c1]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Routes */}
                  <div className="space-y-2">
                    {['Vector', 'Halcyon', 'Quanta'].map((r) => (
                      <div
                        key={r}
                        className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-300"
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/[0.12] pt-6">
                  {[
                    { l: 'Solver bids', v: '17' },
                    { l: 'Best path slippage', v: '9 bps' },
                    { l: 'Atomic settlement', v: '410ms' },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
                        {s.l}
                      </div>
                      <div className="mt-1 font-display text-xl text-bone-50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stack of smaller cards */}
          <div className="grid gap-6 lg:col-span-5">
            {[
              {
                t: 'Autonomous liquidity',
                b: 'Liquidity pools rebalanced and risk-graded by agents in continuous time, not by governance epochs.',
                m: 'POOLS · 142',
              },
              {
                t: 'Machine credit',
                b: 'Under-collateralized lending to verifiable, attested agents with on-chain reputation.',
                m: 'AGENTS · 6.4k',
              },
              {
                t: 'Solver markets',
                b: 'A permissionless market of solvers competes to fulfill agent intents at best execution.',
                m: 'SOLVERS · 89',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={0.1 + i * 0.08}>
                <div className="surface surface-hover relative h-full p-7">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-[20px] tracking-tight text-bone-50">{c.t}</h4>
                    <span className="font-mono text-[10px] text-bone-500">{c.m}</span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

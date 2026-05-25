'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GridBackdrop } from '@/components/visuals/GridBackdrop';

const flows = [
  { from: 'Liquidity agent', to: 'AMM router', amount: '$ 142.80', tag: 'rebalance' },
  { from: 'Inference broker', to: 'Compute market', amount: '0.024 ETH', tag: 'pay-per-token' },
  { from: 'Treasury bot', to: 'Yield strategy', amount: '$ 18,400', tag: 'allocation' },
  { from: 'Cargo agent', to: 'Logistics oracle', amount: '$ 6.41', tag: 'settle' },
  { from: 'Research swarm', to: 'Data marketplace', amount: '$ 0.92', tag: 'query' },
];

export function AgentEconomy() {
  return (
    <section id="agent-economy" className="section relative overflow-hidden">
      <GridBackdrop variant="fine" fade="radial" className="opacity-40" />

      <div className="container-edge relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left — narrative */}
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="04 — Agent Economy"
              title={
                <>
                  Capital that <span className="gradient-text-signal">thinks for itself.</span>
                </>
              }
              description={
                <>
                  Unit Zero turns agents into economic actors with real custody, real
                  policy, and real settlement guarantees. They negotiate, transact, and
                  hire other agents — at machine speed, around the clock, across protocols.
                </>
              }
            />

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {[
                { k: 'Machine-to-machine', v: 'Agents pay agents for compute, data, liquidity, attention, and execution.' },
                { k: 'Delegated capital', v: 'Treasuries assign budgets to agents under cryptographically enforced policy.' },
                { k: 'Composable swarms', v: 'Multi-agent workflows settle atomically across protocols in one round.' },
                { k: 'Open marketplaces', v: 'Permissionless markets for inference, data, storage, and routing.' },
              ].map((b) => (
                <div key={b.k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
                    {b.k}
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{b.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — live agent activity panel */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="surface noise-overlay relative">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-signal-300/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-300" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200">
                      Agent Activity · Live
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-bone-400">epoch 1,842</span>
                </div>

                <div className="divide-y divide-white/[0.04]">
                  {flows.map((f, i) => (
                    <motion.div
                      key={f.from + i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                      className="group flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02]"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-300 font-mono text-[10px] text-signal-300">
                        A{i + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[13.5px] text-bone-100">
                          <span className="truncate">{f.from}</span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="flex-shrink-0 text-bone-500">
                            <path d="M1 4H11M11 4L8 1M11 4L8 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                          <span className="truncate text-bone-300">{f.to}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-500">
                          <span>tx 0x{(Math.random() * 1e10).toString(16).slice(0, 6)}…{(Math.random() * 1e10).toString(16).slice(0, 4)}</span>
                          <span>·</span>
                          <span className="text-signal-300/80">{f.tag}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-[15px] text-bone-50">{f.amount}</div>
                        <div className="font-mono text-[10px] text-bone-500">{(0.1 + i * 0.03).toFixed(2)}s ago</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/[0.06] px-5 py-3">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
                    <span>Streaming · agent intents</span>
                    <span className="text-bone-200">+ 412 / sec</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

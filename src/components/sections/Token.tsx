'use client';

import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const utilities = [
  {
    t: 'Gas & execution',
    d: 'Every agent action — intent submission, settlement, attestation — settles in UNIT0.',
    icon: '◇',
  },
  {
    t: 'Validator stake',
    d: 'Independent validators bond UNIT0 to secure consensus and earn protocol fees.',
    icon: '◈',
  },
  {
    t: 'Policy collateral',
    d: 'Agents post UNIT0 as cryptographic bond against the policies they operate under.',
    icon: '◉',
  },
  {
    t: 'Network governance',
    d: 'UNIT0 holders direct protocol upgrades, treasury allocations, and ecosystem grants.',
    icon: '◌',
  },
];

export function Token() {
  return (
    <section id="token" className="section relative bg-ink-300/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-edge relative">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left — token visual */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="surface noise-overlay relative overflow-hidden p-8 md:p-10">
                <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-signal-300/[0.08] blur-3xl" />
                <div className="absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-plasma-500/[0.08] blur-3xl" />

                <div className="relative">
                  <span className="tag">UNIT0 · Native asset</span>

                  {/* Stylized token mark */}
                  <div className="my-12 flex justify-center">
                    <div className="relative h-44 w-44">
                      <svg viewBox="0 0 200 200" className="absolute inset-0">
                        <defs>
                          <linearGradient id="tok-grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#9fe0c1" />
                            <stop offset="100%" stopColor="#419dff" />
                          </linearGradient>
                        </defs>
                        {/* Outer hex */}
                        <polygon
                          points="100,10 180,55 180,145 100,190 20,145 20,55"
                          fill="none"
                          stroke="url(#tok-grad)"
                          strokeWidth="1.2"
                        />
                        {/* Inner hex */}
                        <polygon
                          points="100,40 154,72 154,128 100,160 46,128 46,72"
                          fill="none"
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="0.8"
                        />
                        {/* Concentric rings */}
                        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.08)" />
                        <circle cx="100" cy="100" r="32" fill="none" stroke="rgba(159,224,193,0.3)" />
                        <circle cx="100" cy="100" r="6" fill="#FFFFFF" />
                        {/* Corner dots */}
                        {[[100, 10], [180, 55], [180, 145], [100, 190], [20, 145], [20, 55]].map(
                          ([x, y]) => (
                            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#9fe0c1" />
                          )
                        )}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-bone-400">
                          ticker
                        </span>
                        <span className="mt-1 font-display text-2xl tracking-tight text-bone-50">
                          UNIT0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Distribution */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/[0.12] pt-6">
                    {[
                      { l: 'Total supply', v: '1.0B' },
                      { l: 'Circulating', v: '412M' },
                      { l: 'Inflation', v: '2.1%' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
                          {s.l}
                        </div>
                        <div className="mt-1 font-display text-[17px] text-bone-50">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — utility */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="09 — Token"
              title={
                <>
                  UNIT0 — the economic unit of <span className="gradient-text-signal">the agent economy.</span>
                </>
              }
              description="UNIT0 is the native asset of the network: gas, stake, collateral, and governance — woven through every layer of the protocol."
            />

            <StaggerGroup className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.05] sm:grid-cols-2">
              {utilities.map((u) => (
                <StaggerItem key={u.t}>
                  <div className="h-full bg-black p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[22px] text-signal-300">{u.icon}</span>
                      <h3 className="font-display text-[17px] tracking-tight text-bone-50">{u.t}</h3>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-bone-300">{u.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#tokenomics" className="btn-ghost">
                  Tokenomics paper
                </a>
                <a href="#stake" className="btn-ghost">
                  Stake UNIT0
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

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

const cexExchanges = [
  {
    name: 'MEXC',
    pair: 'UNIT0 / USDT',
    vol: '$58.8K',
    rank: 1,
    featured: true,
    href: 'https://www.mexc.com/exchange/UNIT0_USDT',
    badge: 'Highest Volume',
  },
  {
    name: 'Gate.io',
    pair: 'UNIT0 / USDT',
    vol: '$381',
    rank: 2,
    featured: false,
    href: 'https://www.gate.io/trade/UNIT0_USDT',
    badge: null,
  },
  {
    name: 'WEEX',
    pair: 'UNIT0 / USDT',
    vol: '$23',
    rank: 3,
    featured: false,
    href: 'https://www.weex.com',
    badge: null,
  },
];

const dexExchanges = [
  {
    name: 'Swop.fi',
    pair: 'UNIT0 / USDC',
    vol: '$1.4K',
    chain: 'Waves',
    href: 'https://swop.fi',
    featured: true,
  },
  {
    name: 'Raydium',
    pair: 'UNIT0 / SOL',
    vol: '$143',
    chain: 'Solana',
    href: 'https://raydium.io',
    featured: false,
  },
  {
    name: 'WX Network',
    pair: 'UNIT0 / WAVES',
    vol: '$66',
    chain: 'Waves',
    href: 'https://wx.network',
    featured: false,
  },
];

function ChainBadge({ chain }: { chain: string }) {
  const colors: Record<string, string> = {
    Waves:  'border-plasma-500/30 text-plasma-500',
    Solana: 'border-signal-300/30 text-signal-300',
  };
  return (
    <span className={`rounded-sm border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${colors[chain] ?? 'border-white/20 text-white/40'}`}>
      {chain}
    </span>
  );
}

export function Token() {
  return (
    <section id="token" className="section relative bg-ink-300/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-edge relative">
        {/* ── TOP GRID: visual + utility ── */}
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
                        <polygon points="100,10 180,55 180,145 100,190 20,145 20,55"
                          fill="none" stroke="url(#tok-grad)" strokeWidth="1.2" />
                        <polygon points="100,40 154,72 154,128 100,160 46,128 46,72"
                          fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.08)" />
                        <circle cx="100" cy="100" r="32" fill="none" stroke="rgba(159,224,193,0.3)" />
                        <circle cx="100" cy="100" r="6" fill="#FFFFFF" />
                        {[[100, 10], [180, 55], [180, 145], [100, 190], [20, 145], [20, 55]].map(
                          ([x, y]) => (
                            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#9fe0c1" />
                          )
                        )}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-bone-400">ticker</span>
                        <span className="mt-1 font-display text-2xl tracking-tight text-bone-50">UNIT0</span>
                      </div>
                    </div>
                  </div>

                  {/* Live stats from CoinMarketCap */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/[0.12] pt-6">
                    {[
                      { l: 'Total supply', v: '101.6M' },
                      { l: 'Circulating', v: '5.09M' },
                      { l: 'Holders', v: '1,150+' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">{s.l}</div>
                        <div className="mt-1 font-display text-[17px] text-bone-50">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* CMC link */}
                  <a
                    href="https://coinmarketcap.com/currencies/unit0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400/50 transition-colors hover:text-signal-300"
                  >
                    View on CoinMarketCap
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
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
                  UNIT0 — the economic unit of{' '}
                  <span className="gradient-text-signal">the agent economy.</span>
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
                <a href="https://www.units.network/the-unit0-token" target="_blank" rel="noopener noreferrer" className="btn-ghost">Tokenomics paper</a>
                <a href="https://docs.units.network/guides/staking" target="_blank" rel="noopener noreferrer" className="btn-ghost">Stake UNIT0</a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── WHERE TO BUY ── */}
        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-white/[0.08] pt-16">

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="eyebrow mb-4">Where to buy UNIT0</div>
                <h3 className="font-display text-display-md font-medium text-white">
                  Available on{' '}
                  <span className="gradient-text-signal">CEX & DEX.</span>
                </h3>
              </div>
              <a
                href="https://coinmarketcap.com/currencies/unit0/markets/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400/50 transition-colors hover:text-signal-300"
              >
                All markets on CMC
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* CEX column */}
              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
                  <span className="h-px w-4 bg-signal-300/50" />
                  Centralized Exchanges
                </div>
                <div className="flex flex-col gap-px overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.04]">
                  {cexExchanges.map((ex) => (
                    <a
                      key={ex.name}
                      href={ex.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between bg-black px-5 py-4 transition-colors duration-300 hover:bg-ink-300/40 ${
                        ex.featured ? 'border-l-2 border-l-signal-300' : 'border-l-2 border-l-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank */}
                        <span className="w-4 font-mono text-[10px] text-bone-400/40">#{ex.rank}</span>

                        {/* Name + pair */}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-[15px] font-medium text-white">
                              {ex.name}
                            </span>
                            {ex.badge && (
                              <span className="rounded-sm border border-signal-300/30 bg-signal-300/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-signal-300">
                                {ex.badge}
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 font-mono text-[11px] text-bone-400/60">{ex.pair}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* 24h vol */}
                        <div className="text-right">
                          <div className="font-mono text-[12px] text-white/70">{ex.vol}</div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-bone-400/40">24h vol</div>
                        </div>
                        {/* Arrow */}
                        <svg
                          width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden
                          className="text-bone-400/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-300"
                        >
                          <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* DEX column */}
              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
                  <span className="h-px w-4 bg-plasma-500/50" />
                  Decentralized Exchanges
                </div>
                <div className="flex flex-col gap-px overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.04]">
                  {dexExchanges.map((ex) => (
                    <a
                      key={ex.name}
                      href={ex.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-black px-5 py-4 transition-colors duration-300 hover:bg-ink-300/40"
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-[15px] font-medium text-white">{ex.name}</span>
                            <ChainBadge chain={ex.chain} />
                          </div>
                          <div className="mt-0.5 font-mono text-[11px] text-bone-400/60">{ex.pair}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-mono text-[12px] text-white/70">{ex.vol}</div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-bone-400/40">24h vol</div>
                        </div>
                        <svg
                          width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden
                          className="text-bone-400/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-plasma-500"
                        >
                          <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-sm border border-signal-300/[0.15] bg-signal-300/[0.04] p-5 sm:flex-row sm:items-center">
              <div>
                <div className="font-display text-[15px] font-medium text-white">
                  Highest liquidity on MEXC
                </div>
                <div className="mt-1 font-mono text-[12px] text-bone-400/60">
                  UNIT0/USDT · 94% Vol/Mkt Cap ratio · spot market
                </div>
              </div>
              <a
                href="https://www.mexc.com/exchange/UNIT0_USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                Trade on MEXC
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

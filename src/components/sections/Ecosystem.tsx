'use client';

import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Category = 'Markets' | 'DeFi' | 'Compute' | 'Coordination' | 'Data' | 'Infra';

const projects: {
  name: string;
  cat: Category;
  blurb: string;
  status: 'mainnet' | 'testnet' | 'private beta';
  span?: string;
}[] = [
  {
    name: 'Halcyon',
    cat: 'Markets',
    blurb:
      'A permissionless marketplace where autonomous trading agents bid for execution slots and settle atomically across venues.',
    status: 'mainnet',
    span: 'lg:col-span-2',
  },
  {
    name: 'Vector',
    cat: 'DeFi',
    blurb:
      'An AI-native money market. Risk parameters, liquidations, and interest curves are operated by agents under cryptographic mandate.',
    status: 'mainnet',
  },
  {
    name: 'Orbital',
    cat: 'Compute',
    blurb:
      'Verifiable inference market. Agents purchase model calls, payable per-token, with on-chain attestation of the runtime.',
    status: 'mainnet',
  },
  {
    name: 'Concord',
    cat: 'Coordination',
    blurb:
      'Multi-agent coordination layer for autonomous swarms — task allocation, payment splitting, dispute resolution.',
    status: 'testnet',
    span: 'lg:col-span-2',
  },
  {
    name: 'Lumen',
    cat: 'Data',
    blurb:
      'Decentralized data exchange for machine learning. Pay-per-query datasets with revocable licensing.',
    status: 'testnet',
  },
  {
    name: 'Anchor',
    cat: 'Infra',
    blurb:
      'Agent-grade RPC and indexing — built for thousands of concurrent reads from autonomous clients.',
    status: 'mainnet',
  },
  {
    name: 'Quanta',
    cat: 'DeFi',
    blurb:
      'Autonomous portfolio engine. Treasuries delegate capital to policy-bound agents that optimize across yield protocols.',
    status: 'private beta',
  },
  {
    name: 'Mesh',
    cat: 'Coordination',
    blurb:
      'Reputation layer for autonomous agents — verifiable history of every action, every outcome, every contract honored.',
    status: 'testnet',
  },
];

const statusStyle: Record<typeof projects[number]['status'], string> = {
  mainnet: 'bg-signal-300/15 text-signal-300',
  testnet: 'bg-plasma-400/15 text-plasma-400',
  'private beta': 'bg-white/10 text-bone-300',
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="section relative">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="05 — Ecosystem"
            title={
              <>
                An ecosystem of <span className="gradient-text-signal">interconnected autonomous systems.</span>
              </>
            }
            description="Unit Zero hosts the protocols that make the agent economy run. Not random dApps — modular, machine-scale infrastructure that composes."
          />
          <Reveal delay={0.2}>
            <a href="/ecosystem" className="btn-ghost flex-shrink-0">
              Browse all 60+ projects
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Category filter strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {(['All', 'Markets', 'DeFi', 'Compute', 'Coordination', 'Data', 'Infra'] as const).map(
              (c, i) => (
                <span
                  key={c}
                  className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                    i === 0
                      ? 'border-signal-300/30 bg-signal-300/10 text-signal-300'
                      : 'border-white/[0.08] text-bone-400'
                  }`}
                >
                  {c}
                </span>
              )
            )}
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.name} className={p.span ?? ''}>
              <article className="group surface surface-hover spotlight relative h-full overflow-hidden p-7">
                {/* Diagonal accent line */}
                <div className="pointer-events-none absolute -right-px -top-px h-20 w-20 overflow-hidden">
                  <div className="absolute right-0 top-0 h-px w-12 origin-right -rotate-45 bg-gradient-to-r from-transparent via-signal-300/40 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                    {p.cat}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${
                      statusStyle[p.status]
                    }`}
                  >
                    ● {p.status}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[26px] tracking-tight text-bone-50">
                  {p.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{p.blurb}</p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 transition-colors group-hover:text-bone-100">
                  View protocol
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

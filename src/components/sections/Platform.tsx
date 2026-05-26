'use client';

import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const pillars = [
  {
    no: '01',
    title: 'Agent Runtime',
    body:
      'Execute long-running, stateful agents directly on-chain — with attested compute, deterministic replay, and policy-bounded autonomy.',
    bullets: ['TEE-attested execution', 'Deterministic replay', 'Policy guardrails'],
  },
  {
    no: '02',
    title: 'Intent Settlement',
    body:
      'Agents declare what they want. The network finds, prices, and settles the optimal multi-hop execution path in a single atomic round.',
    bullets: ['Cross-protocol routing', 'Atomic multi-step', 'MEV-aware sequencing'],
  },
  {
    no: '03',
    title: 'Machine Identity',
    body:
      'Every agent carries a verifiable identity: who built it, what model powers it, what policy it operates under, what it has done before.',
    bullets: ['Did-style agent registry', 'Verifiable provenance', 'Reputation primitives'],
  },
  {
    no: '04',
    title: 'Parallel Execution',
    body:
      'A parallel-by-default VM lets thousands of independent agents transact concurrently, with conflict resolution at the consensus layer.',
    bullets: ['Sharded state access', 'Optimistic concurrency', '120k TPS ceiling'],
  },
  {
    no: '05',
    title: 'Sub-Second Finality',
    body:
      'Sub-second economic finality means agents can act, observe, and react inside a single human heartbeat.',
    bullets: ['~380ms finality', 'BFT consensus', 'Single-slot inclusion'],
  },
  {
    no: '06',
    title: 'Cryptographic Policy',
    body:
      'Spending limits, action budgets, and behavioral constraints are enforced by the protocol — not by trust in the agent operator.',
    bullets: ['On-chain policy engine', 'ZK-attested limits', 'Revocable authority'],
  },
];

export function Platform() {
  return (
    <section id="agents" className="section relative">
      <div className="container-edge">
        <SectionHeader
          eyebrow="03 — Platform"
          title={
            <>
              A protocol stack designed{' '}
              <span className="gradient-text-signal">for machines, by design.</span>
            </>
          }
          description="Unit Zero rethinks the blockchain stack around the assumption that the primary participant is autonomous software. Every layer — identity, execution, settlement, finality — is rebuilt around that premise."
        />

        <StaggerGroup className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.05] md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.no}>
              <div className="group relative h-full bg-black p-7 transition-colors duration-500 hover:bg-ink-300/40 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-300">
                    {p.no}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                    className="text-bone-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone-100"
                  >
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-bone-50">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-bone-300">{p.body}</p>
                <ul className="mt-6 space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400"
                    >
                      <span className="h-px w-3 bg-bone-500" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Hover line */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-signal-300/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

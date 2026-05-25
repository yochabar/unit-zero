'use client';

import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const rows = [
  {
    dim: 'Identity model',
    legacy: 'Human-owned EOAs. KYC-bound. No notion of machine attestation.',
    unitZero: 'Native agent identities. TEE-attested runtimes. Cryptographic provenance.',
  },
  {
    dim: 'Execution semantics',
    legacy: 'Transaction-by-transaction. Optimized for one-shot human signing.',
    unitZero: 'Intent-based execution. Continuous policies. Multi-step agent workflows.',
  },
  {
    dim: 'Throughput envelope',
    legacy: 'Designed for human-rate activity. Bottlenecks at agent scale.',
    unitZero: 'Parallel agent runtime. Sub-second finality. Built for machine concurrency.',
  },
  {
    dim: 'Cost surface',
    legacy: 'Gas auctions hostile to micro-transactions.',
    unitZero: 'Fractional fees. Predictable cost rails for high-frequency agents.',
  },
  {
    dim: 'Coordination primitives',
    legacy: 'Smart contracts, manually composed.',
    unitZero: 'Agent registry, policy engine, intent router — composable by default.',
  },
];

export function WhyDifferent() {
  return (
    <section id="consensus" className="section relative">
      <div className="container-edge">
        <SectionHeader
          eyebrow="02 — The Gap"
          title={
            <>
              Traditional blockchains were{' '}
              <span className="text-bone-400">designed for humans.</span> Autonomous
              systems need a different substrate.
            </>
          }
          description="Existing networks treat agents as second-class users — proxies of a human signer. Unit Zero starts from a different premise: the participant is the machine."
        />

        {/* Comparison table */}
        <Reveal delay={0.15}>
          <div className="surface noise-overlay mt-16 overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-1 border-b border-white/[0.06] md:grid-cols-[1.1fr_1.4fr_1.4fr]">
              <div className="hidden p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400 md:block">
                Dimension
              </div>
              <div className="border-l border-white/[0.04] p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400 md:border-l">
                Legacy chains
              </div>
              <div className="border-l border-white/[0.04] bg-gradient-to-b from-signal-300/[0.05] to-transparent p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-300">
                Unit Zero
              </div>
            </div>

            <StaggerGroup>
              {rows.map((r, i) => (
                <StaggerItem key={r.dim}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr] ${
                      i !== rows.length - 1 ? 'border-b border-white/[0.04]' : ''
                    }`}
                  >
                    <div className="p-5 font-display text-[15px] text-bone-100 md:p-6">
                      {r.dim}
                    </div>
                    <div className="border-t border-white/[0.04] p-5 text-[14px] leading-relaxed text-bone-400 md:border-l md:border-t-0 md:p-6">
                      {r.legacy}
                    </div>
                    <div className="border-t border-white/[0.04] bg-gradient-to-b from-signal-300/[0.04] to-transparent p-5 text-[14px] leading-relaxed text-bone-100 md:border-l md:border-t-0 md:p-6">
                      {r.unitZero}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

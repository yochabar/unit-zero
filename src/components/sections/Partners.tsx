'use client';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const partners = [
  'Halcyon Labs',
  'Vector Capital',
  'Orbital Compute',
  'Concord Systems',
  'Lumen Data Co-op',
  'Anchor RPC',
  'Quanta Treasury',
  'Mesh Reputation',
  'Cipher Validators',
  'Northwind Research',
  'Beacon Institute',
  'Atlas Foundation',
];

export function Partners() {
  return (
    <section id="partners" className="section relative">
      <div className="container-edge">
        <SectionHeader
          eyebrow="11 — Partners"
          align="center"
          title={
            <>
              Backed and built by{' '}
              <span className="gradient-text-signal">a global network of operators.</span>
            </>
          }
          description="Foundations, validator collectives, research labs, and protocol teams building the autonomous economy together."
        />

        {/* Logo wall */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p}
                className="group flex h-24 items-center justify-center bg-ink-100 transition-colors duration-300 hover:bg-ink-200/60"
              >
                <span className="font-display text-[15px] tracking-tight text-bone-400 transition-colors group-hover:text-bone-100">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom marquee strip */}
        <Reveal delay={0.2}>
          <div className="mask-fade-x mt-16 overflow-hidden">
            <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-bone-400">
              {[...Array(2)].flatMap((_, n) =>
                [
                  'Mainnet beta · live',
                  'Validators · 142',
                  'Independent geographies · 28',
                  'Open-source clients · 4',
                  'Audited by Trail of Bits & Spearbit',
                  'Foundation governed by token holders',
                ].map((s, i) => (
                  <span key={`${n}-${i}`} className="flex items-center gap-12">
                    <span className="h-1 w-1 rounded-full bg-signal-300" />
                    {s}
                  </span>
                ))
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import { Reveal } from '@/components/ui/Reveal';
import { GridBackdrop } from '@/components/visuals/GridBackdrop';

export function Narrative() {
  return (
    <section id="platform" className="section relative">
      <GridBackdrop variant="default" fade="radial" className="opacity-30" />

      <div className="container-edge relative">
        <Reveal>
          <span className="eyebrow">01 — Thesis</span>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="text-balance font-display text-display-lg text-bone-50">
                The next generation of software <span className="text-bone-400">won&apos;t be operated</span> — it will{' '}
                <span className="gradient-text-signal">operate itself.</span>
              </h2>
            </Reveal>

            <div className="mt-10 max-w-xl space-y-6 text-[17px] leading-relaxed text-bone-200 md:text-[18px]">
              <Reveal delay={0.1}>
                <p>
                  Autonomous agents are about to transact, coordinate, hire, and own
                  capital — at a scale and speed no human-operated rail was designed
                  for. They need an open settlement layer that treats them as first-class
                  participants.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-bone-300">
                  Unit Zero is that layer. Built around verifiable agent identity,
                  intent-based execution, and cryptographic policy enforcement, it gives
                  machines a credible-neutral place to act, settle, and prove what they did.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Side principle list */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="surface noise-overlay p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                  Core principles
                </div>
                <ul className="mt-6 space-y-5">
                  {[
                    { k: 'Agent-first', v: 'Wallets, identities, and execution primitives shaped around autonomous software, not human users.' },
                    { k: 'Verifiable', v: 'Every agent action carries cryptographic provenance — runtime, policy, and outcome.' },
                    { k: 'Neutral', v: 'A public, credibly-neutral substrate. No gatekeepers. No proprietary AI silos.' },
                    { k: 'Composable', v: 'Agents and protocols interlock into machine-scale economies through open standards.' },
                  ].map((p) => (
                    <li key={p.k} className="grid grid-cols-[120px_1fr] gap-4 border-t border-white/[0.05] pt-5 first:border-0 first:pt-0">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-300">{p.k}</span>
                      <span className="text-[14px] leading-relaxed text-bone-200">{p.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

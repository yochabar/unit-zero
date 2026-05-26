'use client';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TerminalCard } from '@/components/visuals/TerminalCard';

const dx = [
  {
    t: 'Agent SDK',
    d: 'Author, simulate, and deploy autonomous agents with first-class TypeScript and Rust bindings.',
  },
  {
    t: 'Policy DSL',
    d: 'A declarative language to express what an agent can and cannot do — enforced by the protocol.',
  },
  {
    t: 'Local devnet',
    d: 'Spin up a fully attested local devnet in one command. Replay any mainnet block deterministically.',
  },
  {
    t: 'Indexer & RPC',
    d: 'Agent-grade RPC with stream subscriptions, intent state, and structured event filtering.',
  },
];

export function Developers() {
  return (
    <section id="developers" className="section relative">
      <div className="container-edge">
        <SectionHeader
          eyebrow="08 — Developer experience"
          title={
            <>
              Build an agent in <span className="gradient-text-signal">a single afternoon.</span>
            </>
          }
          description="Unit Zero ships with the tooling teams expect from modern infrastructure platforms — typed SDKs, local devnets, deterministic replay, and a documentation layer that respects your time."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left — terminal */}
          <div className="lg:col-span-7">
            <Reveal>
              <TerminalCard />
            </Reveal>

            {/* Inline code snippet */}
            <Reveal delay={0.1}>
              <div className="surface noise-overlay mt-6 overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/[0.12] px-5 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                    agent.ts — declare an intent
                  </span>
                  <span className="font-mono text-[10px] text-bone-500">TypeScript</span>
                </div>
                <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.85] text-bone-200 md:text-[13px]">
{`import { Agent, intent, policy } from "@unitzero/sdk";

const treasury = new Agent({
  id: "treasury-bot",
  runtime: "tee",                           // TEE-attested execution
  policy: policy.budget("USDC", 50_000),    // protocol-enforced
});

await treasury.submit(
  intent.rebalance({
    target: { ETH: 0.4, USDC: 0.6 },
    maxSlippageBps: 15,
    deadline: "30s",
  })
);`}
                </pre>
              </div>
            </Reveal>
          </div>

          {/* Right — DX bullets */}
          <div className="lg:col-span-5">
            <div className="grid gap-px overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.05]">
              {dx.map((d, i) => (
                <Reveal key={d.t} delay={0.05 * i}>
                  <div className="bg-black p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-signal-300/30 font-mono text-[10px] text-signal-300">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-[20px] tracking-tight text-bone-50">{d.t}</h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-bone-300">{d.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#docs" className="btn-primary">
                  Read the docs
                </a>
                <a href="#sdk" className="btn-ghost">
                  npm install @unitzero/sdk
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

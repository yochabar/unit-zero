'use client';

import { motion } from 'framer-motion';

const lines = [
  { p: '$', t: 'unit0 agent deploy --runtime=tee --policy=./policy.yaml', c: 'text-bone-200' },
  { p: '→', t: 'Verifying intent schema           ✓', c: 'text-bone-400' },
  { p: '→', t: 'Provisioning agent wallet 0x4f…a91   ✓', c: 'text-bone-400' },
  { p: '→', t: 'Attesting runtime (SGX + zkSNARK)   ✓', c: 'text-bone-400' },
  { p: '→', t: 'Registering on AgentRegistry@0x00..01', c: 'text-bone-400' },
  { p: '✓', t: 'Agent "market-maker-α" live · epoch 1842 · tx 0x7d2c…', c: 'text-signal-300' },
  { p: '$', t: '_', c: 'text-bone-100' },
];

export function TerminalCard({ className }: { className?: string }) {
  return (
    <div className={`surface noise-overlay ${className ?? ''}`}>
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.12] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
          ~/unit0 · deploy
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
          ● live
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-5 font-mono text-[12px] leading-[1.85] md:text-[13px]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-3"
          >
            <span className="w-3 select-none text-bone-500">{l.p}</span>
            <span className={l.c}>
              {l.t}
              {i === lines.length - 1 && (
                <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-bone-100 align-middle" />
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

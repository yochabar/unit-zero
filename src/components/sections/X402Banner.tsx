'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { label: 'Agent sends\nHTTP request', code: 'GET /api/data' },
  { label: 'Server returns\n402 + terms', code: '402 Payment Required' },
  { label: 'Agent pays\non-chain', code: 'UNIT0 transfer' },
  { label: 'Access\ngranted', code: '200 OK' },
];

export function X402Banner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/[0.06] bg-black">
      {/* Subtle plasma accent */}
      <div className="pointer-events-none absolute -right-60 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-plasma-500/[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute -left-60 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-signal-300/[0.04] blur-[100px]" />

      <div className="container-edge relative py-12 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left — protocol identity */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 lg:w-72"
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-plasma-500/30 bg-plasma-500/[0.07] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-plasma-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-plasma-500/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-plasma-500" />
              </span>
              Open Standard · EVM-Native
            </div>

            <h3 className="font-display text-[32px] font-semibold leading-none tracking-tight text-white">
              x402
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-bone-400">
              HTTP-native payments for AI agents. Machines pay for API access instantly,
              on-chain, with no accounts or subscriptions — via a single HTTP status code.
            </p>
            <div className="mt-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-300" />
              <span className="font-mono text-[11px] text-bone-300">
                Unit Zero is natively x402-compatible
              </span>
            </div>
            <a
              href="https://www.x402.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400/50 transition-colors hover:text-plasma-500"
            >
              x402.org
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right — flow diagram */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              {steps.map((step, i) => (
                <div key={step.code} className="flex flex-1 items-center gap-2 sm:flex-col sm:items-stretch">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex flex-1 flex-col justify-between rounded-sm border p-4 ${
                      step.code === '402 Payment Required'
                        ? 'border-plasma-500/40 bg-plasma-500/[0.07]'
                        : step.code === '200 OK'
                        ? 'border-signal-300/30 bg-signal-300/[0.05]'
                        : 'border-white/[0.08] bg-white/[0.02]'
                    }`}
                  >
                    <div
                      className={`font-mono text-[10px] leading-tight ${
                        step.code === '402 Payment Required'
                          ? 'text-plasma-500'
                          : step.code === '200 OK'
                          ? 'text-signal-300'
                          : 'text-bone-400/60'
                      }`}
                    >
                      {step.code}
                    </div>
                    <div className="mt-2 whitespace-pre-line font-mono text-[11px] leading-snug text-white/60">
                      {step.label}
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="shrink-0"
                    >
                      {/* Horizontal arrow (sm+) */}
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden className="hidden text-white/15 sm:block">
                        <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {/* Vertical arrow (mobile) */}
                      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden className="text-white/15 sm:hidden">
                        <path d="M5 0V14M1 10L5 14L9 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400/40"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-plasma-500/60" />
                EIP-compliant
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-plasma-500/60" />
                Any EVM chain
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-plasma-500/60" />
                Stablecoin or native token
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-plasma-500/60" />
                Open standard — x402 Foundation
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

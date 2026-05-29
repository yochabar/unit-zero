'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GridBackdrop } from '@/components/visuals/GridBackdrop';

type Category = 'All' | 'Inference' | 'Trading' | 'DeFi' | 'Data' | 'Gaming' | 'Infra';

interface Agent {
  id: string;
  name: string;
  description: string;
  cat: Exclude<Category, 'All'>;
  price: string;
  currency: string;
  calls: string;
  uptime: string;
  status: 'live' | 'beta' | 'soon';
  accent: string;
  locked: boolean;
}

const agents: Agent[] = [
  {
    id: 'nexus',
    name: 'Nexus',
    description: 'Cross-chain arbitrage agent scanning 40+ DEXs for optimal execution paths. Sub-200ms latency.',
    cat: 'Trading',
    price: '0.05',
    currency: 'UNIT0',
    calls: '14,200',
    uptime: '99.8%',
    status: 'beta',
    accent: '#9fe0c1',
    locked: false,
  },
  {
    id: 'oracle-prime',
    name: 'Oracle Prime',
    description: 'Real-time price aggregator across 200+ pairs. Signed attestations, x402-payable per request.',
    cat: 'Data',
    price: '0.001',
    currency: 'UNIT0',
    calls: '982K',
    uptime: '99.99%',
    status: 'live',
    accent: '#419dff',
    locked: false,
  },
  {
    id: 'quant7',
    name: 'Quant-7',
    description: 'Yield optimization agent that rebalances positions across lending protocols autonomously.',
    cat: 'DeFi',
    price: '0.12',
    currency: 'UNIT0',
    calls: '3,400',
    uptime: '99.1%',
    status: 'beta',
    accent: '#edca5c',
    locked: false,
  },
  {
    id: 'scout',
    name: 'Scout',
    description: 'On-chain intelligence layer. Indexes wallet behavior, flags anomalies, surfaces alpha.',
    cat: 'Data',
    price: '0.008',
    currency: 'UNIT0',
    calls: '28,500',
    uptime: '98.7%',
    status: 'soon',
    accent: '#9fe0c1',
    locked: true,
  },
  {
    id: 'forge',
    name: 'Forge',
    description: 'Automated smart contract auditor. Static analysis + AI pattern matching. Report in < 60s.',
    cat: 'Infra',
    price: '2.50',
    currency: 'UNIT0',
    calls: '620',
    uptime: '100%',
    status: 'soon',
    accent: '#419dff',
    locked: true,
  },
  {
    id: 'meridian',
    name: 'Meridian',
    description: 'Multi-chain portfolio manager that executes rebalancing strategies under policy constraints.',
    cat: 'DeFi',
    price: '0.30',
    currency: 'UNIT0',
    calls: '1,800',
    uptime: '99.4%',
    status: 'soon',
    accent: '#9fe0c1',
    locked: true,
  },
  {
    id: 'pulse',
    name: 'Pulse',
    description: 'Social sentiment engine trained on real-time X, Reddit, and Telegram data. Per-token signal.',
    cat: 'Data',
    price: '0.02',
    currency: 'UNIT0',
    calls: '44,100',
    uptime: '97.9%',
    status: 'soon',
    accent: '#edca5c',
    locked: true,
  },
  {
    id: 'cipher',
    name: 'Cipher',
    description: 'ZK proof generation as a service. Groth16 & Plonk proofs, verifiable on any EVM chain.',
    cat: 'Infra',
    price: '0.50',
    currency: 'UNIT0',
    calls: '2,100',
    uptime: '100%',
    status: 'soon',
    accent: '#419dff',
    locked: true,
  },
  {
    id: 'atlas',
    name: 'Atlas',
    description: 'Inference gateway routing prompts to the cheapest available model meeting quality SLA.',
    cat: 'Inference',
    price: '0.003',
    currency: 'UNIT0',
    calls: '210K',
    uptime: '99.6%',
    status: 'soon',
    accent: '#9fe0c1',
    locked: true,
  },
];

const categories: Category[] = ['All', 'Inference', 'Trading', 'DeFi', 'Data', 'Gaming', 'Infra'];

const catColor: Record<Exclude<Category, 'All'>, string> = {
  Inference: 'text-signal-300 border-signal-300/30 bg-signal-300/[0.06]',
  Trading:   'text-gold-400 border-gold-400/30 bg-gold-400/[0.06]',
  DeFi:      'text-plasma-500 border-plasma-500/30 bg-plasma-500/[0.06]',
  Data:      'text-purple-400 border-purple-400/30 bg-purple-400/[0.06]',
  Gaming:    'text-orange-400 border-orange-400/30 bg-orange-400/[0.06]',
  Infra:     'text-bone-300 border-white/20 bg-white/[0.04]',
};

const statsBanner = [
  { v: '2,400+', l: 'agents registered' },
  { v: 'x402', l: 'payment standard' },
  { v: 'UNIT0', l: 'native currency' },
  { v: 'Q3 2026', l: 'public launch' },
];

function AgentIcon({ name, accent }: { name: string; accent: string }) {
  const initials = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm font-mono text-[12px] font-medium"
      style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }: { status: Agent['status'] }) {
  const cfg = {
    live: 'text-signal-300 border-signal-300/30 bg-signal-300/[0.08]',
    beta: 'text-gold-400 border-gold-400/30 bg-gold-400/[0.06]',
    soon: 'text-bone-400/50 border-white/10 bg-white/[0.02]',
  }[status];
  const label = { live: '● Live', beta: '◐ Beta', soon: '○ Soon' }[status];
  return (
    <span className={`rounded-sm border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${cfg}`}>
      {label}
    </span>
  );
}

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-black"
    >
      {/* Lock overlay */}
      {agent.locked && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 backdrop-blur-[3px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/[0.12] bg-black/60">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <rect x="2" y="5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" className="text-bone-400/50" />
              <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-bone-400/50" />
            </svg>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone-400/40">Coming soon</span>
        </div>
      )}

      <div className={agent.locked ? 'pointer-events-none select-none opacity-40' : ''}>
        {/* Card header */}
        <div className="flex items-start justify-between gap-3 p-5 pb-0">
          <div className="flex items-center gap-3">
            <AgentIcon name={agent.name} accent={agent.accent} />
            <div>
              <div className="font-display text-[15px] font-medium text-white">{agent.name}</div>
              <span className={`inline-block rounded-sm border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] ${catColor[agent.cat]}`}>
                {agent.cat}
              </span>
            </div>
          </div>
          <StatusBadge status={agent.status} />
        </div>

        {/* Description */}
        <p className="px-5 pt-3 text-[12.5px] leading-relaxed text-bone-400">
          {agent.description}
        </p>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-3 gap-px border-t border-white/[0.05] bg-white/[0.04]">
          <div className="bg-black px-4 py-3">
            <div className="font-mono text-[11px] font-medium text-white">{agent.price}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-bone-400/50">{agent.currency}/call</div>
          </div>
          <div className="bg-black px-4 py-3">
            <div className="font-mono text-[11px] font-medium text-white">{agent.calls}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-bone-400/50">calls / 7d</div>
          </div>
          <div className="bg-black px-4 py-3">
            <div className="font-mono text-[11px] font-medium text-white">{agent.uptime}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-bone-400/50">uptime</div>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-bone-400/40">
            x402 · UNIT0
          </span>
          <button
            disabled={agent.locked || agent.status === 'soon'}
            className="flex items-center gap-1.5 rounded-sm border border-signal-300/30 bg-signal-300/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-signal-300 transition-all duration-200 hover:bg-signal-300/10 disabled:pointer-events-none disabled:opacity-30"
          >
            {agent.status === 'soon' ? 'Notify me' : 'Deploy'}
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function MarketplacePreview() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? agents
    : agents.filter(a => a.cat === activeCategory);

  return (
    <div className="relative min-h-screen bg-black">
      <GridBackdrop variant="fine" fade="radial" className="opacity-20" />

      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-signal-300/[0.05] blur-[120px]" />

      {/* Navbar spacer */}
      <div className="h-20" />

      <div className="container-edge relative pb-32 pt-16">

        {/* ── HERO ── */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-signal-300/20 bg-signal-300/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-signal-300/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-300" />
            </span>
            Beta Preview · Not yet public
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl font-medium leading-[0.97] text-bone-50"
          >
            Agent{' '}
            <span className="gradient-text-signal">Marketplace</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-bone-300"
          >
            The permissionless market for autonomous AI agents. Pay per call with UNIT0
            via x402 — no accounts, no API keys, no gatekeepers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://t.me/unitsnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Early Access
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a href="https://docs.units.network" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Deploy an Agent
            </a>
          </motion.div>
        </div>

        {/* ── STATS BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/[0.1] bg-white/[0.05] sm:grid-cols-4"
        >
          {statsBanner.map((s) => (
            <div key={s.l} className="flex flex-col items-center justify-center bg-black px-4 py-5 text-center">
              <div className="font-display text-[22px] font-medium text-signal-300">{s.v}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-bone-400/60">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* ── SEARCH + FILTERS ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14"
        >
          {/* Fake search bar */}
          <div className="relative mb-6 flex items-center gap-3 rounded-sm border border-white/[0.1] bg-white/[0.02] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-bone-400/40">
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-[13px] text-bone-400/30">Search agents by name, category, or capability…</span>
            <span className="ml-auto rounded-sm border border-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-bone-400/30">⌘K</span>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-sm border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-signal-300/40 bg-signal-300/10 text-signal-300'
                    : 'border-white/[0.08] text-bone-400 hover:border-white/[0.18] hover:text-bone-100'
                }`}
              >
                {cat}
                {cat !== 'All' && cat === 'Gaming' && (
                  <span className="ml-1.5 font-mono text-[8px] text-bone-400/40">soon</span>
                )}
              </button>
            ))}

            {/* Sort control (decorative) */}
            <div className="ml-auto flex items-center gap-2 rounded-sm border border-white/[0.08] px-3 py-2 font-mono text-[10px] text-bone-400/40">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 3h8M2 5h6M3 7h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Sort: Calls ↓
            </div>
          </div>
        </motion.div>

        {/* ── AGENT GRID ── */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((agent, i) => (
                <AgentCard key={agent.id} agent={agent} index={i} />
              ))}

              {/* "More agents" teaser card */}
              {activeCategory === 'All' && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: filtered.length * 0.05 + 0.05 }}
                  className="flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-white/[0.1] bg-white/[0.01] p-10 text-center"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-400/40">
                    + 2,400 agents
                  </div>
                  <div className="text-[13px] text-bone-400/30">
                    Launching with the marketplace
                  </div>
                  <a
                    href="https://t.me/unitsnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-signal-300/60 transition-colors hover:text-signal-300"
                  >
                    Get notified
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-24 max-w-2xl overflow-hidden rounded-sm border border-signal-300/[0.15] bg-signal-300/[0.03]"
        >
          {/* Top glow accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-signal-300/40 to-transparent" />

          <div className="flex flex-col items-center gap-6 px-8 py-12 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-signal-300/60">
              Q3 2026 · Public Launch
            </div>
            <h2 className="font-display text-[28px] font-medium leading-[1.1] text-white md:text-[34px]">
              Be among the first<br />to deploy your agent.
            </h2>
            <p className="max-w-md text-[14px] leading-relaxed text-bone-400">
              Join the waitlist and get early access to deploy agents, set pricing, and earn UNIT0
              from every x402 call — before the public launch.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://t.me/unitsnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join via Telegram
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://x.com/UnitsNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Follow on X
              </a>
            </div>
          </div>
        </motion.div>

        {/* x402 footnote */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400/30">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-plasma-500/50" />
            x402 payment standard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-plasma-500/50" />
            EVM-native settlement
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-plasma-500/50" />
            No custody · no KYC
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-plasma-500/50" />
            Open standard · permissionless
          </span>
        </div>

      </div>
    </div>
  );
}

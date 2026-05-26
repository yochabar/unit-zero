'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlockscoutStats {
  total_blocks: string;
  total_transactions: string;
  average_block_time: number;  // milliseconds
  gas_prices: { slow: number; average: number; fast: number };
  total_addresses: string;
  transactions_today: string;
  coin_price: string | null;
}

function formatLargeNumber(raw: string | number): { value: string; suffix: string } {
  const n = typeof raw === 'string' ? parseInt(raw, 10) : raw;
  if (n >= 1_000_000_000) return { value: (n / 1_000_000_000).toFixed(2), suffix: 'B' };
  if (n >= 1_000_000)     return { value: (n / 1_000_000).toFixed(2),     suffix: 'M' };
  if (n >= 1_000)         return { value: n.toLocaleString('en-US'),        suffix: '' };
  return { value: String(n), suffix: '' };
}

function formatBlockTime(ms: number): { value: string; suffix: string } {
  if (ms >= 1000) return { value: (ms / 1000).toFixed(2), suffix: 's' };
  return { value: ms.toFixed(0), suffix: 'ms' };
}

function AnimatedNumber({ to }: { to: string }) {
  const [display, setDisplay] = useState(to);
  const prev = useRef(to);

  useEffect(() => {
    if (prev.current !== to) {
      prev.current = to;
      setDisplay(to);
    }
  }, [to]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={to}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block tabular-nums"
      >
        {display}
      </motion.span>
    </AnimatePresence>
  );
}

const POLL_INTERVAL = 30_000; // 30s

export function LiveStats() {
  const [stats, setStats] = useState<BlockscoutStats | null>(null);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [flash, setFlash] = useState(false);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats', { cache: 'no-store' });
      if (!res.ok) throw new Error('bad response');
      const data: BlockscoutStats = await res.json();
      setStats(data);
      setError(false);
      setLastUpdated(new Date());
      setFlash(true);
      setTimeout(() => setFlash(false), 600);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchStats();
    const id = setInterval(fetchStats, POLL_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const blockTime = stats ? formatBlockTime(stats.average_block_time) : null;
  const blocks    = stats ? formatLargeNumber(stats.total_blocks)      : null;
  const txns      = stats ? formatLargeNumber(stats.total_transactions) : null;

  const items = [
    {
      label: 'Total Blocks',
      value: blocks?.value ?? '—',
      suffix: blocks?.suffix ?? '',
      sub: 'mainnet blocks produced',
      accent: false,
    },
    {
      label: 'Total Txns',
      value: txns?.value ?? '—',
      suffix: txns?.suffix ?? '',
      sub: `${stats?.transactions_today ?? '—'} txns today`,
      accent: false,
    },
    {
      label: 'Avg Block Time',
      value: blockTime?.value ?? '—',
      suffix: blockTime?.suffix ?? '',
      sub: 'network finality',
      accent: true,
    },
    {
      label: 'Gas Tracker',
      value: stats ? stats.gas_prices.average.toFixed(2) : '—',
      suffix: stats ? ' Gwei' : '',
      sub: `fast: ${stats?.gas_prices.fast.toFixed(2) ?? '—'} · slow: ${stats?.gas_prices.slow.toFixed(2) ?? '—'}`,
      accent: false,
    },
  ] as const;

  return (
    <div className="relative mx-auto mt-20 max-w-5xl md:mt-28">
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between px-0.5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                flash ? 'bg-signal-300' : 'bg-signal-300/60'
              } animate-ping`}
            />
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-300 transition-opacity ${error ? 'opacity-30' : 'opacity-100'}`} />
          </span>
          Live network stats
          {error && <span className="text-red-400/60">· reconnecting</span>}
        </div>

        {lastUpdated && (
          <span className="font-mono text-[10px] text-bone-400/50 tabular-nums">
            updated {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.1] overflow-hidden rounded-sm border border-white/[0.12] bg-black/60 backdrop-blur-md md:grid-cols-4 md:divide-y-0">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`relative flex flex-col justify-between p-6 md:p-7 ${
              item.accent ? 'bg-signal-300/[0.04]' : ''
            }`}
          >
            {/* Accent top border */}
            {item.accent && (
              <div className="absolute inset-x-0 top-0 h-px bg-signal-300/40" />
            )}

            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone-400 mb-3">
                {item.label}
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`font-mono text-[28px] font-medium leading-none md:text-[32px] ${item.accent ? 'text-signal-300' : 'text-white'}`}>
                  {stats ? <AnimatedNumber to={item.value} /> : (
                    <span className="inline-block w-16 h-6 rounded-sm bg-white/5 animate-pulse" />
                  )}
                </span>
                {stats && item.suffix && (
                  <span className={`font-mono text-[13px] ${item.accent ? 'text-signal-300/70' : 'text-white/40'}`}>
                    {item.suffix}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 font-mono text-[10px] text-bone-400/60 leading-relaxed">
              {stats ? item.sub : <span className="inline-block w-24 h-2.5 rounded-sm bg-white/5 animate-pulse mt-1" />}
            </div>

            {/* Flash overlay on update */}
            <AnimatePresence>
              {flash && (
                <motion.div
                  key={`flash-${i}`}
                  initial={{ opacity: 0.12 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute inset-0 bg-signal-300"
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Explorer link */}
      <div className="mt-3 flex justify-end">
        <a
          href="https://explorer.unit0.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400/50 transition-colors hover:text-signal-300"
        >
          View full explorer
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

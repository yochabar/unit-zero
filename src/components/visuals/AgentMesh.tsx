'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * AgentMesh — an abstracted neural / agent-coordination graph.
 * Renders as SVG with deterministic node positions so the layout is
 * stable across SSR & client, then animates ambient pulses.
 */
export function AgentMesh({ className }: { className?: string }) {
  // Deterministic node layout — concentric rings with controlled jitter
  const nodes = useMemo(() => {
    const cx = 500;
    const cy = 320;
    const rings = [
      { r: 0,   count: 1,  size: 5 },
      { r: 90,  count: 6,  size: 3 },
      { r: 170, count: 10, size: 2.5 },
      { r: 260, count: 14, size: 2 },
      { r: 360, count: 18, size: 1.6 },
    ];
    const list: { x: number; y: number; r: number; ring: number; idx: number }[] = [];
    rings.forEach((ring, ringIdx) => {
      for (let i = 0; i < ring.count; i++) {
        const angle = (i / ring.count) * Math.PI * 2 + ringIdx * 0.18;
        const jitter = ringIdx === 0 ? 0 : Math.sin(i * 1.7 + ringIdx) * 8;
        const x = cx + Math.cos(angle) * (ring.r + jitter);
        const y = cy + Math.sin(angle) * (ring.r * 0.62 + jitter); // squashed for perspective
        list.push({ x, y, r: ring.size, ring: ringIdx, idx: i });
      }
    });
    return list;
  }, []);

  // Build edges — connect inner rings to the next ring
  const edges = useMemo(() => {
    const e: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
    const byRing: Record<number, typeof nodes> = {};
    nodes.forEach((n) => {
      byRing[n.ring] = byRing[n.ring] || [];
      byRing[n.ring].push(n);
    });
    // Connect each ring to ring+1 with a few selected partners
    for (let r = 0; r < 4; r++) {
      const inner = byRing[r];
      const outer = byRing[r + 1];
      if (!inner || !outer) continue;
      inner.forEach((a, i) => {
        // each inner node touches 2 outer nodes
        const targets = [
          outer[(i * 2) % outer.length],
          outer[(i * 2 + 1) % outer.length],
        ];
        targets.forEach((t, ti) => {
          e.push({ x1: a.x, y1: a.y, x2: t.x, y2: t.y, key: `${r}-${i}-${ti}` });
        });
      });
    }
    return e;
  }, [nodes]);

  // Pick a handful of "active" edges that get the pulse animation
  const activeEdges = useMemo(() => edges.filter((_, i) => i % 7 === 0).slice(0, 12), [edges]);

  return (
    <svg
      viewBox="0 0 1000 640"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mesh-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9fe0c1" stopOpacity="0.35" />
          <stop offset="40%" stopColor="#419dff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#419dff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9fe0c1" stopOpacity="0" />
          <stop offset="50%" stopColor="#9fe0c1" stopOpacity="1" />
          <stop offset="100%" stopColor="#9fe0c1" stopOpacity="0" />
        </linearGradient>
        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <mask id="fade-mask">
          <radialGradient id="fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <rect width="1000" height="640" fill="url(#fade)" />
        </mask>
      </defs>

      {/* Soft radial bloom */}
      <ellipse cx="500" cy="320" rx="380" ry="240" fill="url(#mesh-center)" />

      <g mask="url(#fade-mask)">
        {/* Static edges */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" fill="none">
          {edges.map((e) => (
            <line key={e.key} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
          ))}
        </g>

        {/* Animated pulse edges — packets traversing the mesh */}
        <g>
          {activeEdges.map((e, i) => {
            const dx = e.x2 - e.x1;
            const dy = e.y2 - e.y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            return (
              <g key={`pulse-${e.key}`}>
                <line
                  x1={e.x1}
                  y1={e.y1}
                  x2={e.x2}
                  y2={e.y2}
                  stroke="rgba(159,224,193,0.35)"
                  strokeWidth="0.8"
                />
                <motion.circle
                  r="1.6"
                  fill="#9fe0c1"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [e.x1, e.x2],
                    cy: [e.y1, e.y2],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.4 + (len / 200),
                    delay: i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  style={{ filter: 'drop-shadow(0 0 4px #9fe0c1)' }}
                />
              </g>
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((n, i) => (
            <g key={`node-${i}`}>
              {n.ring === 0 ? (
                <>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r + 4}
                    fill="#9fe0c1"
                    opacity="0.2"
                    filter="url(#node-glow)"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <circle cx={n.x} cy={n.y} r={n.r} fill="#FFFFFF" />
                </>
              ) : (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.ring <= 2 ? '#9fe0c1' : 'rgba(255,255,255,0.4)'}
                  opacity={n.ring <= 2 ? 0.85 : 0.45}
                />
              )}
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

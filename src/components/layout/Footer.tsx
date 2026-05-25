import { Logo } from '@/components/ui/Logo';

const columns = [
  {
    title: 'Network',
    links: [
      { label: 'Architecture', href: '#platform' },
      { label: 'Consensus', href: '#consensus' },
      { label: 'Agent runtime', href: '#agents' },
      { label: 'Performance', href: '#performance' },
      { label: 'Security', href: '#security' },
    ],
  },
  {
    title: 'Build',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Agent SDK', href: '#sdk' },
      { label: 'CLI reference', href: '#cli' },
      { label: 'Examples', href: '#examples' },
      { label: 'Grants', href: '#grants' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Projects', href: '#ecosystem' },
      { label: 'Partners', href: '#partners' },
      { label: 'Validators', href: '#validators' },
      { label: 'Research', href: '#research' },
      { label: 'Brand kit', href: '#brand' },
    ],
  },
  {
    title: 'Foundation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Governance', href: '#governance' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06] bg-ink-50">
      {/* Top hairline glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-300/30 to-transparent" />

      <div className="container-edge pb-12 pt-20 md:pt-28">
        {/* Macro brand block */}
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <h2 className="mt-8 max-w-md font-display text-3xl leading-[1.05] tracking-tight text-bone-50 md:text-4xl">
              Infrastructure for the
              <br />
              <span className="gradient-text-signal">autonomous economy.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone-300">
              Unit Zero is a public, AI-native settlement layer for machine-to-machine
              coordination — operated by independent validators, governed by the network.
            </p>

            <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal-300/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-300" />
              </span>
              Mainnet beta · Epoch 1,842
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[14px] text-bone-200 transition-colors hover:text-bone-50"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="relative mt-24 select-none overflow-hidden">
          <div className="bg-gradient-to-b from-bone-50/[0.08] to-transparent bg-clip-text font-display text-[20vw] font-medium leading-none tracking-tightest text-transparent">
            UNIT&nbsp;ZERO
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-bone-400">
            <span>© {new Date().getFullYear()} Unit Zero Foundation.</span>
            <a href="#privacy" className="hover:text-bone-200">Privacy</a>
            <a href="#terms" className="hover:text-bone-200">Terms</a>
            <a href="#disclosures" className="hover:text-bone-200">Disclosures</a>
          </div>

          <div className="flex items-center gap-3">
            {[
              { l: 'GitHub', h: '#github' },
              { l: 'X', h: '#x' },
              { l: 'Discord', h: '#discord' },
              { l: 'Mirror', h: '#mirror' },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-[11px] text-bone-300 transition-colors hover:border-white/20 hover:text-bone-50"
                aria-label={s.l}
              >
                <span className="font-mono text-[10px]">{s.l[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Logo } from '@/components/ui/Logo';

const columns = [
  {
    title: 'Network',
    links: [
      { label: 'Architecture', href: '#platform' },
      { label: 'Consensus', href: '#consensus' },
      { label: 'Agent runtime', href: '#agents' },
      { label: 'Performance', href: '#performance' },
      { label: 'Token', href: '#token' },
    ],
  },
  {
    title: 'Build',
    links: [
      { label: 'Documentation', href: 'https://docs.unit0.dev', external: true },
      { label: 'Agent SDK', href: 'https://docs.unit0.dev', external: true },
      { label: 'Explorer', href: 'https://explorer.unit0.dev', external: true },
      { label: 'Xyper Market', href: 'https://xyper.market', external: true },
      { label: 'x402 Protocol', href: 'https://www.x402.org', external: true },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Projects', href: '/ecosystem' },
      { label: 'Partners', href: '#partners' },
      { label: 'Token', href: '#token' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Waves Network', href: 'https://waves.tech', external: true },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'X (Twitter)', href: 'https://x.com/UnitsNetwork', external: true },
      { label: 'Telegram', href: 'https://t.me/unitsnetwork', external: true },
      { label: 'Telegram News', href: 'https://t.me/unitsnews', external: true },
      { label: 'Discord', href: 'https://discord.com/invite/wM5R4HQBhN', external: true },
      { label: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/unit0/', external: true },
    ],
  },
];

const socials = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/UnitsNetwork',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.139 2.25H8.08l4.264 5.638 5.9-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/unitsnetwork',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: 'Telegram News',
    href: 'https://t.me/unitsnews',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22.4 2.9c-.3-.2-.7-.2-1.1-.1L2.1 9.8C1.5 10 1 10.6 1 11.2s.4 1.2 1 1.4l4.5 1.5 1.9 6c.2.6.7.9 1.3.9.4 0 .8-.2 1.1-.5l2.7-2.7 4.8 3.6c.3.2.6.3.9.3.2 0 .3 0 .5-.1.5-.2.8-.6.9-1.1l3.5-16.5c.1-.6-.1-1.2-.7-1.1zM9.5 14.8l-1.1 3.3-.8-2.8 8.5-8.4-6.6 7.9z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: 'https://discord.com/invite/wM5R4HQBhN',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.12] bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-300/40 to-transparent" />

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

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.12] text-bone-400 transition-all duration-200 hover:border-signal-300/40 hover:bg-signal-300/[0.06] hover:text-signal-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal-300/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-300" />
              </span>
              Mainnet · explorer.unit0.dev
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
                        {...('external' in l && l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
          <div className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text font-display text-[18vw] font-bold uppercase leading-none text-transparent">
            UNIT&nbsp;ZERO
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/[0.12] pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-bone-400">
            <span>© {new Date().getFullYear()} Unit Zero Foundation.</span>
            <a href="#privacy" className="hover:text-bone-200">Privacy</a>
            <a href="#terms" className="hover:text-bone-200">Terms</a>
            <a href="https://waves.tech" target="_blank" rel="noopener noreferrer" className="hover:text-bone-200">
              Built on Waves
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/[0.08] text-bone-400/60 transition-all duration-200 hover:border-signal-300/30 hover:text-signal-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

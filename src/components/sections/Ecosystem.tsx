'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/ui/Reveal';

const CDN = 'https://cdn.prod.website-files.com/678680e4580db97738b84e60/';

const logos: { name: string; logo: string | null; cat: string }[] = [
  // DeFi
  { name: 'CrossCurve',   logo: `${CDN}67caf55a35d773520e0e0f49_CrossCurve%20Logo.png`,                           cat: 'DeFi' },
  { name: 'DEXTools',     logo: `${CDN}67dc15f4174623e60847b947_5bVlhohW_400x400.png`,                            cat: 'DeFi' },
  { name: 'Swop.fi',      logo: `${CDN}67cef665bae2152f4031382f_swop.fi%20logo.png`,                              cat: 'DeFi' },
  { name: 'WOWMAX',       logo: `${CDN}67cb2577e8ff5b68c77b16c3_Wowmax%20Logo.png`,                               cat: 'DeFi' },
  { name: 'Oxequity',     logo: `${CDN}67cef7041e9d798cd250d325_0xequity.png`,                                    cat: 'DeFi' },
  { name: 'Unilend',      logo: null,                                                                              cat: 'DeFi' },
  { name: 'KoalaSwap',    logo: null,                                                                              cat: 'DeFi' },
  // Gaming
  { name: 'Real Games',   logo: `${CDN}67cf01c17dda6e62c80d86bb_real%20games%20logo.png`,                         cat: 'Gaming' },
  { name: 'StarsFi',      logo: `${CDN}67cf01c1017671ea7f33f516_StarsFi%20Logo.png`,                              cat: 'Gaming' },
  { name: 'Oldy',         logo: `${CDN}67cf039b7d0231954d81844c_2025-03-10%2009.20.22%201.png`,                   cat: 'Gaming' },
  // Tools & Infra
  { name: 'DappRadar',    logo: `${CDN}67caf52065f9483b67378d9e_DappRadar%20Logo.png`,                            cat: 'Tools' },
  { name: 'DefiLlama',    logo: `${CDN}67caf4e8b74a558cb81bb584_DefiLama%20Logo.png`,                             cat: 'Tools' },
  { name: 'Cryptorank',   logo: `${CDN}67caea77589e97fe2e93e684_CryptoRanl%20Logo.png`,                           cat: 'Tools' },
  { name: 'DIA',          logo: `${CDN}6909d316926b7b7fc94a3a61_6pDT0QPf_400x400.jpg`,                            cat: 'Tools' },
  { name: 'GPT360',       logo: `${CDN}68779dd2aa1a5a56316ea5b1_GPT360_circle.png`,                               cat: 'Tools' },
  { name: 'SubQuery',     logo: `${CDN}68243d1da5575167521b5e37_sqt.png`,                                         cat: 'Tools' },
  { name: 'ZNS Connect',  logo: `${CDN}685527f087b7d802346a0db9_zns-logo.c8f2606c.svg`,                           cat: 'Tools' },
  { name: 'WavesBridge',  logo: `${CDN}67cf0827e57cf726ef5af73c_waves%20bridge%20logo.png`,                       cat: 'Tools' },
  { name: 'Nomis',        logo: `${CDN}67cb2577ece0af8169fff7fb_Nomis%20Logo.png`,                                cat: 'Tools' },
  { name: 'Meme City',    logo: `${CDN}67cf0788f5081698d0894681_Meme%20City%20Logo.png`,                          cat: 'Tools' },
  { name: 'Asterizm',     logo: null,                                                                              cat: 'Tools' },
  { name: 'Brevis',       logo: null,                                                                              cat: 'Tools' },
  { name: 'Fun Units',    logo: null,                                                                              cat: 'Tools' },
  // Wallets
  { name: 'Ledger',       logo: `${CDN}686b6cfb9883daa670bff096_LEDGER-WORDMARK-SINGLE-CHARACTER-BLACK-CMYK-01%201.png`, cat: 'Wallets' },
  { name: 'Trezor',       logo: `${CDN}6878a9cf910c484252a1d3c5_Group%202131332431.png`,                          cat: 'Wallets' },
  { name: 'Safe',         logo: `${CDN}682438f9cd8dda394b90ca7c_Group%202131330096.png`,                          cat: 'Wallets' },
  { name: 'Enkrypt',      logo: `${CDN}682437dd3af3a65a21bc5107_enkrypt%20logo.png`,                              cat: 'Wallets' },
  { name: 'BlockWallet',  logo: `${CDN}6858ec0e8e3557f75c429363_BlockWallet%20Transparent.png`,                   cat: 'Wallets' },
  { name: 'HoldStation',  logo: `${CDN}67cf091d923acc15e5a5eb85_28510.png`,                                       cat: 'Wallets' },
  { name: 'Capitalist',   logo: null,                                                                              cat: 'Wallets' },
  // Marketplaces
  { name: 'Magic Square', logo: `${CDN}67cf162278bceacf33d69602_favicon-512x512.png`,                             cat: 'Marketplaces' },
  { name: 'CoNFT',        logo: `${CDN}67cf16d04fa00894376c6092_CONFT%20LOGO.png`,                                cat: 'Marketplaces' },
];

const catStats = [
  { label: 'DeFi',          count: 7,  color: 'text-signal-300'  },
  { label: 'Gaming',        count: 3,  color: 'text-gold-400'    },
  { label: 'Tools & Infra', count: 13, color: 'text-plasma-500'  },
  { label: 'Wallets',       count: 7,  color: 'text-bone-200'    },
  { label: 'Marketplaces',  count: 2,  color: 'text-purple-400'  },
];

function LogoTile({ item, index }: { item: typeof logos[0]; index: number }) {
  const initials = item.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-sm border border-white/[0.07] bg-white/[0.03] p-3 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
    >
      {item.logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={item.logo}
          alt={item.name}
          className="h-8 w-full object-contain brightness-[1.1] saturate-[0.9] transition-all duration-300 group-hover:brightness-125 group-hover:saturate-100"
          style={{ maxHeight: '2rem' }}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const span = document.createElement('span');
              span.className = 'font-mono text-[11px] text-bone-400';
              span.textContent = initials;
              parent.appendChild(span);
            }
          }}
        />
      ) : (
        <span className="font-mono text-[13px] text-bone-400">{initials}</span>
      )}
      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-bone-400/50 transition-colors duration-300 group-hover:text-bone-400">
        {item.name}
      </span>
    </motion.div>
  );
}

export function Ecosystem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} id="ecosystem" className="section relative">
      <div className="container-edge">

        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">05 — Ecosystem</span>
            </Reveal>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-display-lg font-medium text-bone-50"
            >
              {logos.length}+ projects building on{' '}
              <span className="gradient-text-signal">Unit Zero.</span>
            </motion.h2>
          </div>

          {/* Category stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:items-end lg:gap-y-2"
          >
            {catStats.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className={`font-display text-[20px] font-medium leading-none ${c.color}`}>{c.count}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400/60">{c.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo grid */}
        <div className="mt-12 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8">
          {logos.map((item, i) => (
            <LogoTile key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-md text-[14px] leading-relaxed text-bone-400">
              DeFi protocols, gaming studios, infrastructure tools, wallets, and marketplaces — all integrated with the Unit Zero network.
            </p>
            <a href="/ecosystem" className="btn-primary shrink-0">
              Browse all projects
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

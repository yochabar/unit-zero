'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const CDN = 'https://cdn.prod.website-files.com/678680e4580db97738b84e60/';

type Category = 'All' | 'DeFi' | 'Gaming' | 'Tools & Infra' | 'Wallets' | 'Marketplaces';

interface Project {
  name: string;
  cat: Exclude<Category, 'All'>;
  blurb: string;
  logo: string | null;
  href: string;
  featured?: boolean;
}

const projects: Project[] = [
  // ── DeFi ──
  {
    name: 'CrossCurve',
    cat: 'DeFi',
    blurb: 'Cross-chain AMM enabling unified liquidity across 20+ networks through a single routing layer.',
    logo: `${CDN}67caf55a35d773520e0e0f49_CrossCurve%20Logo.png`,
    href: 'https://crosscurve.fi',
    featured: true,
  },
  {
    name: 'DEXTools',
    cat: 'DeFi',
    blurb: 'Professional on-chain trading terminal with real-time charts, DEX analytics, and token discovery.',
    logo: `${CDN}67dc15f4174623e60847b947_5bVlhohW_400x400.png`,
    href: 'https://www.dextools.io',
  },
  {
    name: 'Swop.fi',
    cat: 'DeFi',
    blurb: 'Automated market maker on Waves providing concentrated liquidity pools and yield farming.',
    logo: `${CDN}67cef665bae2152f4031382f_swop.fi%20logo.png`,
    href: 'https://swop.fi',
  },
  {
    name: 'WOWMAX',
    cat: 'DeFi',
    blurb: 'DEX aggregator finding optimal trade routes across multiple protocols for best execution price.',
    logo: `${CDN}67cb2577e8ff5b68c77b16c3_Wowmax%20Logo.png`,
    href: 'https://wowmax.exchange',
  },
  {
    name: 'Oxequity',
    cat: 'DeFi',
    blurb: 'Tokenized real-world asset platform enabling on-chain trading of equity and structured products.',
    logo: `${CDN}67cef7041e9d798cd250d325_0xequity.png`,
    href: 'https://0xequity.io',
  },
  {
    name: 'Unilend',
    cat: 'DeFi',
    blurb: 'Permissionless money market for lending and borrowing any token pair without governance approval.',
    logo: null,
    href: 'https://unilend.finance',
  },
  {
    name: 'KoalaSwap',
    cat: 'DeFi',
    blurb: 'Next-generation AMM DEX with concentrated liquidity positions and dynamic fee tiers.',
    logo: null,
    href: 'https://koalaswap.io',
  },

  // ── Gaming ──
  {
    name: 'Real Games',
    cat: 'Gaming',
    blurb: 'Blockchain gaming platform where players own their in-game assets and earn from gameplay.',
    logo: `${CDN}67cf01c17dda6e62c80d86bb_real%20games%20logo.png`,
    href: 'https://real.games',
    featured: true,
  },
  {
    name: 'StarsFi',
    cat: 'Gaming',
    blurb: 'Social gaming platform for content creators — tokenized fan engagement and creator monetization.',
    logo: `${CDN}67cf01c1017671ea7f33f516_StarsFi%20Logo.png`,
    href: 'https://stars.fi',
  },
  {
    name: 'Oldy',
    cat: 'Gaming',
    blurb: 'NFT-based collectible game with on-chain provenance and player-driven economy.',
    logo: `${CDN}67cf039b7d0231954d81844c_2025-03-10%2009.20.22%201.png`,
    href: 'https://oldy.io',
  },

  // ── Tools & Infra ──
  {
    name: 'DappRadar',
    cat: 'Tools & Infra',
    blurb: 'World\'s leading DApp analytics platform tracking on-chain activity, TVL, and user metrics.',
    logo: `${CDN}67caf52065f9483b67378d9e_DappRadar%20Logo.png`,
    href: 'https://dappradar.com',
    featured: true,
  },
  {
    name: 'DefiLlama',
    cat: 'Tools & Infra',
    blurb: 'Open-source DeFi analytics aggregating TVL, protocol metrics, and yield data across all chains.',
    logo: `${CDN}67caf4e8b74a558cb81bb584_DefiLama%20Logo.png`,
    href: 'https://defillama.com',
  },
  {
    name: 'Cryptorank',
    cat: 'Tools & Infra',
    blurb: 'Comprehensive cryptocurrency intelligence platform with funding analytics and market data.',
    logo: `${CDN}67caea77589e97fe2e93e684_CryptoRanl%20Logo.png`,
    href: 'https://cryptorank.io',
  },
  {
    name: 'DIA',
    cat: 'Tools & Infra',
    blurb: 'Open-source oracle network delivering transparent, verifiable financial data for DeFi protocols.',
    logo: `${CDN}6909d316926b7b7fc94a3a61_6pDT0QPf_400x400.jpg`,
    href: 'https://diadata.org',
  },
  {
    name: 'GPT360',
    cat: 'Tools & Infra',
    blurb: 'AI-powered analytics and intelligence layer surfacing actionable insights from blockchain data.',
    logo: `${CDN}68779dd2aa1a5a56316ea5b1_GPT360_circle.png`,
    href: 'https://gpt360.io',
  },
  {
    name: 'SubQuery',
    cat: 'Tools & Infra',
    blurb: 'Decentralized data indexing infrastructure enabling fast, reliable queries for any blockchain.',
    logo: `${CDN}68243d1da5575167521b5e37_sqt.png`,
    href: 'https://subquery.network',
  },
  {
    name: 'ZNS Connect',
    cat: 'Tools & Infra',
    blurb: 'Web3 domain name system providing human-readable addresses and decentralized identity.',
    logo: `${CDN}685527f087b7d802346a0db9_zns-logo.c8f2606c.svg`,
    href: 'https://zns.is',
  },
  {
    name: 'WavesBridge',
    cat: 'Tools & Infra',
    blurb: 'Trustless cross-chain bridge connecting Waves ecosystem assets to EVM-compatible networks.',
    logo: `${CDN}67cf0827e57cf726ef5af73c_waves%20bridge%20logo.png`,
    href: 'https://waves.exchange/waves-bridge',
  },
  {
    name: 'Nomis',
    cat: 'Tools & Infra',
    blurb: 'On-chain reputation and credit scoring protocol for web3-native identity and creditworthiness.',
    logo: `${CDN}67cb2577ece0af8169fff7fb_Nomis%20Logo.png`,
    href: 'https://nomis.cc',
  },
  {
    name: 'Meme City',
    cat: 'Tools & Infra',
    blurb: 'Social meme token launchpad and community hub for viral crypto culture and token creation.',
    logo: `${CDN}67cf0788f5081698d0894681_Meme%20City%20Logo.png`,
    href: 'https://memecity.io',
  },
  {
    name: 'Asterizm',
    cat: 'Tools & Infra',
    blurb: 'Cross-chain messaging protocol enabling multi-chain DApp deployment from a single codebase.',
    logo: null,
    href: 'https://asterizm.io',
  },
  {
    name: 'Brevis',
    cat: 'Tools & Infra',
    blurb: 'ZK coprocessor making historical on-chain data verifiably accessible to smart contracts.',
    logo: null,
    href: 'https://brevis.network',
  },
  {
    name: 'Fun Units Launchpad',
    cat: 'Tools & Infra',
    blurb: 'Community token launchpad purpose-built for the Unit Zero ecosystem and its native projects.',
    logo: null,
    href: 'https://unit0.dev',
  },

  // ── Wallets ──
  {
    name: 'Ledger',
    cat: 'Wallets',
    blurb: 'Industry-leading hardware wallet with secure element chip protecting keys from all attack vectors.',
    logo: `${CDN}686b6cfb9883daa670bff096_LEDGER-WORDMARK-SINGLE-CHARACTER-BLACK-CMYK-01%201.png`,
    href: 'https://ledger.com',
    featured: true,
  },
  {
    name: 'Trezor',
    cat: 'Wallets',
    blurb: 'Open-source hardware wallet pioneering transparent security for self-sovereign crypto custody.',
    logo: `${CDN}6878a9cf910c484252a1d3c5_Group%202131332431.png`,
    href: 'https://trezor.io',
  },
  {
    name: 'Safe',
    cat: 'Wallets',
    blurb: 'Battle-tested multi-signature smart contract wallet trusted by DAOs, teams, and institutions.',
    logo: `${CDN}682438f9cd8dda394b90ca7c_Group%202131330096.png`,
    href: 'https://safe.global',
  },
  {
    name: 'Enkrypt',
    cat: 'Wallets',
    blurb: 'Multi-chain browser extension wallet supporting EVM, Polkadot, and Solana in one interface.',
    logo: `${CDN}682437dd3af3a65a21bc5107_enkrypt%20logo.png`,
    href: 'https://enkrypt.com',
  },
  {
    name: 'BlockWallet',
    cat: 'Wallets',
    blurb: 'Privacy-focused browser wallet with built-in privacy pools and MEV protection for DeFi users.',
    logo: `${CDN}6858ec0e8e3557f75c429363_BlockWallet%20Transparent.png`,
    href: 'https://blockwallet.io',
  },
  {
    name: 'HoldStation',
    cat: 'Wallets',
    blurb: 'DeFi-native smart wallet with integrated trading, staking, and portfolio management.',
    logo: `${CDN}67cf091d923acc15e5a5eb85_28510.png`,
    href: 'https://holdstation.com',
  },
  {
    name: 'Capitalist',
    cat: 'Wallets',
    blurb: 'Crypto-native payment and wealth management solution bridging traditional finance and Web3.',
    logo: null,
    href: 'https://capitalist.app',
  },

  // ── Marketplaces ──
  {
    name: 'Magic Square',
    cat: 'Marketplaces',
    blurb: 'Web3 app store and gaming marketplace curating the best DApps with community-driven discovery.',
    logo: `${CDN}67cf162278bceacf33d69602_favicon-512x512.png`,
    href: 'https://magic.store',
    featured: true,
  },
  {
    name: 'CoNFT',
    cat: 'Marketplaces',
    blurb: 'NFT marketplace for digital collectibles with creator royalty enforcement and cross-chain support.',
    logo: `${CDN}67cf16d04fa00894376c6092_CONFT%20LOGO.png`,
    href: 'https://conft.app',
  },
];

const categories: Category[] = ['All', 'DeFi', 'Gaming', 'Tools & Infra', 'Wallets', 'Marketplaces'];

const catColor: Record<Exclude<Category, 'All'>, string> = {
  'DeFi':         'text-signal-300 border-signal-300/30 bg-signal-300/[0.06]',
  'Gaming':       'text-gold-400 border-gold-400/30 bg-gold-400/[0.06]',
  'Tools & Infra':'text-plasma-500 border-plasma-500/30 bg-plasma-500/[0.06]',
  'Wallets':      'text-bone-300 border-white/20 bg-white/[0.04]',
  'Marketplaces': 'text-purple-400 border-purple-400/30 bg-purple-400/[0.06]',
};

function LogoFallback({ name }: { name: string }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/[0.06] font-mono text-[11px] text-bone-400">
      {initials}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-sm border border-white/[0.08] bg-black p-5 transition-all duration-300 hover:border-white/[0.18] hover:bg-ink-300/30"
    >
      {/* Top accent line on featured */}
      {project.featured && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-300/50 to-transparent" />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.logo ? (
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-white/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.logo}
                alt={project.name}
                className="h-full w-full object-contain p-1"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ) : (
            <LogoFallback name={project.name} />
          )}
          <div>
            <div className="font-display text-[15px] font-medium text-white">{project.name}</div>
            <span className={`inline-block rounded-sm border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] ${catColor[project.cat]}`}>
              {project.cat}
            </span>
          </div>
        </div>

        <svg
          width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden
          className="mt-1 shrink-0 text-bone-400/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-300"
        >
          <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </div>

      <p className="text-[13px] leading-relaxed text-bone-400">{project.blurb}</p>
    </motion.a>
  );
}

export function EcosystemProjects() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  const counts: Record<Category, number> = {
    All: projects.length,
    DeFi:           projects.filter(p => p.cat === 'DeFi').length,
    Gaming:         projects.filter(p => p.cat === 'Gaming').length,
    'Tools & Infra':projects.filter(p => p.cat === 'Tools & Infra').length,
    Wallets:        projects.filter(p => p.cat === 'Wallets').length,
    Marketplaces:   projects.filter(p => p.cat === 'Marketplaces').length,
  };

  return (
    <section id="ecosystem-projects" className="relative bg-ink-300/10 py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-edge relative">
        <Reveal>
          <SectionHeader
            eyebrow="Ecosystem"
            title={
              <>
                {projects.length}+ projects building on{' '}
                <span className="gradient-text-signal">Unit Zero.</span>
              </>
            }
            description="DeFi protocols, gaming studios, infrastructure tools, wallets, and marketplaces — a growing ecosystem of applications integrated with the Unit Zero network."
          />
        </Reveal>

        {/* Category filter tabs */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-1.5 rounded-sm border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive
                      ? 'border-signal-300/40 bg-signal-300/10 text-signal-300'
                      : 'border-white/[0.08] text-bone-400 hover:border-white/[0.18] hover:text-bone-100'
                  }`}
                >
                  {cat}
                  <span className={`rounded-sm px-1 py-0.5 font-mono text-[8px] ${isActive ? 'bg-signal-300/20 text-signal-300' : 'bg-white/[0.06] text-bone-400/60'}`}>
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-sm border border-white/[0.08] bg-white/[0.02] p-8 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-[17px] font-medium text-white">
                Building on Unit Zero?
              </div>
              <div className="mt-1 font-mono text-[12px] text-bone-400/60">
                Get your project listed in the ecosystem and access grants, technical support, and co-marketing.
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://unit0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply to Build
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://docs.unit0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surface — institutional near-black with cool bias
        ink: {
          0: '#000000',
          50: '#06070A',
          100: '#0A0C12',
          200: '#10131B',
          300: '#161A25',
          400: '#1E2331',
          500: '#262C3D',
        },
        // Foreground neutrals
        bone: {
          50: '#F5F6F8',
          100: '#E8EAEF',
          200: '#C9CDD7',
          300: '#9AA1B1',
          400: '#6B7388',
          500: '#4A5167',
        },
        // Signal — electric cyan/teal accent
        signal: {
          50: '#E6FBFF',
          100: '#B8F3FF',
          200: '#7EE7FF',
          300: '#3DD6FA',
          400: '#19B8E0',
          500: '#0894BA',
          600: '#066F8C',
        },
        // Plasma — secondary warm violet accent for AI / neural motifs
        plasma: {
          400: '#9B7BFF',
          500: '#7B5CFF',
          600: '#5F40E6',
        },
      },
      fontFamily: {
        // Display: a refined geometric sans
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        // Body
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        // Monospace for technical credibility
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo'],
      },
      fontSize: {
        // Editorial hero scale
        'display-xl': ['clamp(3.25rem, 8vw, 7rem)', { lineHeight: '0.96', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 3.6vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(10,12,18,0) 0%, rgba(10,12,18,0.8) 100%)',
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        'glow-signal': '0 0 60px -10px rgba(61,214,250,0.35)',
        'glow-soft': '0 0 80px -20px rgba(123,92,255,0.25)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'scan': 'scan 6s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

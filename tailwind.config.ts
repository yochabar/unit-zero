import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surface — pure black, units.network style
        ink: {
          0: '#000000',
          50: '#050505',
          100: '#000000',
          200: '#0d0d0d',
          300: '#1a1b1f',
          400: '#22242a',
          500: '#43464d',
        },
        // Foreground — bright white spectrum
        bone: {
          50: '#ffffff',
          100: '#f0f0f0',
          200: '#c8c8c8',
          300: '#8a8a8a',
          400: '#555555',
          500: '#353535',
        },
        // Signal — mint green (#9fe0c1), units.network signature accent
        signal: {
          50: '#edf8f3',
          100: '#d4f0e4',
          200: '#b8e8d3',
          300: '#9fe0c1',
          400: '#7fd4ae',
          500: '#5cc49a',
          600: '#3da07a',
        },
        // Plasma — electric blue (#419dff)
        plasma: {
          400: '#5fa8ff',
          500: '#419dff',
          600: '#2b85f5',
        },
        // Gold accent — #edca5c
        gold: {
          300: '#f5df8e',
          400: '#edca5c',
          500: '#d9b23a',
        },
      },
      fontFamily: {
        // Display: Unbounded — bold geometric (units.network hero style)
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        // Body: clean geometric sans
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        // Mono: technical credibility
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7.5vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        'glow-signal': '0 0 60px -10px rgba(159,224,193,0.4)',
        'glow-soft': '0 0 80px -20px rgba(65,157,255,0.3)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        avionics: {
          bg: '#080D18',
          card: '#101827',
          surface: '#152033',
          border: 'rgba(56, 189, 248, 0.15)',
          electric: '#3B82F6',
          cyan: '#22D3EE',
          text: '#F8FAFC',
          muted: '#94A3B8',
          // Light mode equivalents
          'light-bg': '#F1F5F9',
          'light-card': '#FFFFFF',
          'light-surface': '#E2E8F0',
          'light-border': 'rgba(15, 23, 42, 0.12)',
          'light-text': '#0F172A',
          'light-muted': '#64748B',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'avionics-grid': "linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)",
        'avionics-grid-light': "linear-gradient(to right, rgba(59, 130, 246, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.07) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15), transparent 70%)',
      },
      animation: {
        'radar-sweep': 'sweep 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pip-green': 'rgb(41 255 101)',
        'pip-green-dark': 'rgb(0 187 0)',
        'pip-amber': 'rgb(255 182 66)',
        'terminal-green': 'rgb(33 255 33)',
      },
      animation: {
        'scanlines': 'scanlines 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'blink': 'blink 1.5s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      boxShadow: {
        'green-glow': '0 0 10px rgba(41, 255, 101, 0.8)',
      }
    },
  },
  plugins: [],
}

export default config 
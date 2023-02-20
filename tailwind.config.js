const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-ibarra)', ...fontFamily.serif],
        mono: ['var(--font-fira)', ...fontFamily.mono],
        sans: ['var(--font-sono)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

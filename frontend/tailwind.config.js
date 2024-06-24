/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cthulhumbus: ['JmhCthulhumbus', 'sans-serif'],
        HeadlOneHPLHS: ['HeadlOneHPLHS', 'sans-serif'],
        OldStyHPLHS: ['OldStyHPLHS', 'sans-serif'],
        OldstItaHPLHS: ['OldstItaHPLHS', 'sans-serif'],
        OldstSmaCapHPLHS: ['OldstSmaCapHPLHS', 'sans-serif'],
      },
      colors: {
        background: 'rgba(var(--background))',
        border: 'rgba(var(--border))',
        card: 'rgba(var(--card))',
        'copy-primary': 'rgba(var(--copy-primary))',
        'copy-secondary': 'rgba(var(--copy-secondary))',
        cta: 'rgba(var(--cta))',
        'cta-active': 'rgba(var(--cta-active))',
        'cta-text': 'rgba(var(--cta-text))',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#cacaca',
        accent: '#ececec',
      },
      fontFamily: {
        serif: ['Asta Sans', 'serif'],
        elegant: ['var(--font-poor-story)', 'serif'],
        script: ['var(--font-dancing-script)', 'cursive'],
        rouge: ['var(--font-rouge-script)', 'cursive'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FEFEFE',
        'black': '#010101'
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
      },
    },
  },
  darkMode: "class"
}
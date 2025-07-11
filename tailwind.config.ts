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
        'black': '#101010',
        'custom-purple': '#1D1825',
        'gray': '#EAEAEA',
        'dark-gray': '#A0A0A0',
        'other-gray': '#7a7a7a',
        'light-purple': '#9377C5',
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
      },
    },
  },
  darkMode: "class"
}
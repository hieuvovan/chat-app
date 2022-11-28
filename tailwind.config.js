/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['line-clamp-1', 'line-clamp-2', 'line-clamp-3', 'line-clamp-4'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      danger: colors.red[500],
      primary: colors.indigo[600],
      secondary: colors.white,
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

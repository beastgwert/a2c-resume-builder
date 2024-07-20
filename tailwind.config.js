/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.9em',
        xl: '2em',
      },
      fontWeight: {
        semibold: '550',
        bold: '650',
      }
    },
  },
  plugins: [],
}


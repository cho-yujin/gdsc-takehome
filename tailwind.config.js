/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'footer-white': '#f9f9f9',
        'gdsc-grey': '#555555',
        'gdsc-blue': '#3182ce',
        'gdsc-dark-blue': '#184065',
      },
    },
  },
  plugins: [],
};

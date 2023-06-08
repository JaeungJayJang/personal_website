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
        'primary': "#4F5D75",
        "secondary": "#EF8354",
        "tertiary": "#2D3142"
      }
    },
  },
  plugins: [require("daisyui")],
}

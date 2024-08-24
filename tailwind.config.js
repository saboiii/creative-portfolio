/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/banner.png')",
      },
      fontFamily:{
        arimo: ['Arimo', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif'],
      },
      animation: {
        entre: "entre 2s ease-out forwards",
        fade: "fade-in 4s ease-in-out forwards",
        fadeslow: "fade-in-slow 2s ease-in-out forwards",
      },
      keyframes: {
        entre: {
          "0%": {
            opacity: "0%",
            "gap": "1.5em",
          },
          "50%": {
            opacity: "0%",
            "gap": "1.5em",
          },
          "100%": {
            opacity: "100%",
            "gap": "0.8em",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-in-slow": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};

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
        gray: {
          "100": "#0c0c0c",
          "200": "#0a0a0a",
          "300": "rgba(0, 0, 0, 0.2)",
          "500":"#181818",
        },
        black: "#000",
        white: "#fff",
        green: "#0f0",
        blue: "#00f",
        yellow: "#ff0",
        red:"#f00",
        bggray:"#181818",
        bggrayarc:"#1D1D1D",
      },
      spacing: {},
      fontFamily: {
        arsenal: "Arsenal",
        judson: "Judson",
        jua: "Jua",
      },
      borderRadius: {
        "6xl": "25px",
        mini: "15px",
      },
    },
    fontSize: {
      sm: "12px",
      lg: "18px",
      "25xl": "25px",
      "30xl": "30px",
      "40xl": "40px",
      "50xl": "50px",
      "60xl": "60px",
      "70xl": "70px",
      xs: "12px",
      inherit: "inherit",
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
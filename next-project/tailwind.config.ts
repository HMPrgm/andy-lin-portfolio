import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark:"#000000"
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        openSans:['var(--font-open-sans)']
      }
    },
  },
  plugins: [],
} satisfies Config;

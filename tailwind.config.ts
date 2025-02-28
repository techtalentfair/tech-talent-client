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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(calc(-50%))"},
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

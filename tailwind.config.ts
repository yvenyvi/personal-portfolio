import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        bg: "var(--bg-color)",
        card: "var(--card-bg)",
        text: "var(--text-color)",
      },
      boxShadow: {
        neo: "var(--shadow)",
        "neo-hover": "12px 12px 0 rgba(33, 45, 64, 0.7)",
      },
      backgroundImage: {
        "grid-pattern": "url('/grid-pattern.svg')",
      }
    },
  },
  plugins: [],
};
export default config;


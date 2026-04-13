import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#D9E0EF",
        primary: "#29146A",
        secondary: "#29146A",
        cta: "#354FE2",
        "cta-hover": "#4a64f5",
        muted: "#29146A",
        card: "#29146A",
        border: "rgba(53, 79, 226, 0.1)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
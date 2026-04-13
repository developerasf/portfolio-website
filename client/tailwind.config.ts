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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#29146A",
          foreground: "#D9E0EF",
        },
        secondary: {
          DEFAULT: "#29146A",
          foreground: "#D9E0EF",
        },
        cta: {
          DEFAULT: "#354FE2",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#29146A",
          foreground: "rgba(217, 224, 239, 0.6)",
        },
        accent: {
          DEFAULT: "#354FE2",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#29146A",
          foreground: "#D9E0EF",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
      },
      borderRadius: {
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
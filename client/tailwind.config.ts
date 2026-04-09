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
          DEFAULT: "#1E293B",
          foreground: "#F8FAFC",
        },
        secondary: {
          DEFAULT: "#334155",
          foreground: "#F8FAFC",
        },
        cta: {
          DEFAULT: "#22C55E",
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#334155",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#0F172A",
        },
        card: {
          DEFAULT: "#1E293B",
          foreground: "#F8FAFC",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
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
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // GestiónPro Brand Colors - User Defined Palette
        "gp-primary": {
          DEFAULT: "#1e408c", // Blue
          50: "#eaf0fc",
          100: "#d0def8",
          200: "#a6c1f2",
          300: "#739deb",
          400: "#4476e3",
          500: "#2256d0",
          600: "#1e408c", // Main
          700: "#183272",
          800: "#162b5d",
          900: "#15264c",
          foreground: "#ffffff",
        },
        "gp-secondary": {
          DEFAULT: "#108d64", // Green
          50: "#eefcf6",
          100: "#d3f8e6",
          200: "#aaf0ce",
          300: "#72e4b0",
          400: "#3ad291",
          500: "#15b67a",
          600: "#108d64", // Main
          700: "#0d6f51",
          800: "#0b5842",
          900: "#094937",
          foreground: "#ffffff",
        },
        "gp-accent": {
          DEFAULT: "#ea580c", // Orange Main
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c", // Main
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          foreground: "#ffffff",
        },
        "gp-highlight": { // Lime
          DEFAULT: "#90b71c",
          50: "#f8fce7",
          100: "#ecf8c5",
          200: "#d9f191",
          300: "#c1e658",
          400: "#a9d629",
          500: "#90b71c", // Main
          600: "#709112",
          700: "#556e13",
          800: "#455716",
          900: "#3a4916",
          foreground: "#ffffff",
        },
        "gp-olive": { // Darker Green
         DEFAULT: "#5b8907",
         50: "#f4fce7",
         100: "#e5f8c3",
         200: "#cef18b",
         300: "#b0e54d",
         400: "#92d422",
         500: "#70b00c",
         600: "#5b8907", // Main
         700: "#446809",
         800: "#39520e",
         900: "#314411",
         foreground: "#ffffff",
        },
        "gp-neutral": {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

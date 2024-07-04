import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)"],
      },
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
        ping: {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "text-color": {
          "0%": { color: "rgb(113 113 122)" },
          "5%": { color: "rgb(115 115 115)" },
          "10%": { color: "rgb(120 113 108)" },
          "15%": { color: "rgb(239 68 68)" },
          "20%": { color: "rgb(249 115 22)" },
          "25%": { color: "rgb(245 158 11)" },
          "30%": { color: "rgb(234 179 8)" },
          "35%": { color: "rgb(132 204 22)" },
          "40%": { color: "rgb(34 197 94)" },
          "45%": { color: "rgb(16 185 129)" },
          "50%": { color: "rgb(20 184 166)" },
          "55%": { color: "rgb(6 182 212)" },
          "60%": { color: "rgb(14 165 233)" },
          "65%": { color: "rgb(59 130 246)" },
          "70%": { color: "rgb(99 102 241)" },
          "75%": { color: "rgb(139 92 246)" },
          "80%": { color: "rgb(168 85 247)" },
          "85%": { color: "rgb(217 70 239)" },
          "90%": { color: "rgb(236 72 153)" },
          "95%": { color: "rgb(244 63 94)" },
          "100%": { color: "rgb(113 113 122)" },
        },
        "text-color-random": {
          "0%": { color: "rgb(236, 72, 153)" },
          "5%": { color: "rgb(34, 197, 94)" },
          "10%": { color: "rgb(20, 184, 166)" },
          "15%": { color: "rgb(245, 158, 11)" },
          "20%": { color: "rgb(239, 68, 68)" },
          "25%": { color: "rgb(168, 85, 247)" },
          "30%": { color: "rgb(99, 102, 241)" },
          "35%": { color: "rgb(6, 182, 212)" },
          "40%": { color: "rgb(113, 113, 122)" },
          "45%": { color: "rgb(115, 115, 115)" },
          "50%": { color: "rgb(234, 179, 8)" },
          "55%": { color: "rgb(14, 165, 233)" },
          "60%": { color: "rgb(139, 92, 246)" },
          "65%": { color: "rgb(132, 204, 22)" },
          "70%": { color: "rgb(217, 70, 239)" },
          "75%": { color: "rgb(16, 185, 129)" },
          "80%": { color: "rgb(59, 130, 246)" },
          "85%": { color: "rgb(249, 115, 22)" },
          "90%": { color: "rgb(244, 63, 94)" },
          "95%": { color: "rgb(113, 113, 122)" },
          "100%": { color: "rgb(20, 184, 166)" },
        },
        "bounce-cloud": {
          "0%": {
            transform: "translate(-300px, -300px)",
          },
          "25%": {
            transform: "translate(300px, 300px)",
          },
          "50%": {
            transform: "translate(500px, -300px)",
          },
          "75%": {
            transform: "translate(-400px, 300px)",
          },
          "100%": {
            transform: "translate(-300px, -300px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;",
        "cloud-bounce": "bounce-cloud 100s linear infinite;",
        "text-color-animation": "text-color 5s ease-in-out infinite",
        "text-color-animation-random": "text-color-random 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

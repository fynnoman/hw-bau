import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        signal: {
          DEFAULT: "#EA580C",
          50: "#FFF4ED",
          100: "#FFE4D1",
          200: "#FFC49A",
          300: "#FFA061",
          400: "#FF7F2E",
          500: "#EA580C",
          600: "#C94A07",
          700: "#9E3A06",
          800: "#7A2E0A",
          900: "#4A1D07"
        },
        ink: {
          DEFAULT: "#0E0E0E",
          900: "#0E0E0E",
          800: "#1A1A1A",
          700: "#262626",
          600: "#3A3A3A",
          500: "#555555",
          400: "#7A7A7A",
          300: "#A0A0A0",
          200: "#C9C9C9",
          100: "#E5E5E5"
        },
        bone: {
          DEFAULT: "#F5F2EC",
          50: "#FBFAF7",
          100: "#F5F2EC",
          200: "#EDE8DF",
          300: "#DED6C6"
        },
        concrete: {
          DEFAULT: "#A6A39B",
          50: "#EEEDE9",
          100: "#D9D7D1",
          200: "#B9B6AE",
          300: "#8E8B82"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      fontSize: {
        "mega": ["clamp(2.75rem, 11vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "huge": ["clamp(2.25rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "big":  ["clamp(1.75rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }]
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem"
      },
      backgroundImage: {
        "hazard-stripes":
          "repeating-linear-gradient(135deg, #EA580C 0 18px, #0E0E0E 18px 36px)",
        "hazard-stripes-light":
          "repeating-linear-gradient(135deg, #EA580C 0 10px, transparent 10px 20px)",
        "concrete-noise":
          "radial-gradient(circle at 20% 30%, rgba(234,88,12,0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(14,14,14,0.08), transparent 40%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "tape-slide": {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(10%)" }
        }
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "tape-slide": "tape-slide 14s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

export default config;

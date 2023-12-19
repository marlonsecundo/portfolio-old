import type { Config } from "tailwindcss";
import { animation, keyframes } from "./src/app/styles/animations";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#1e1e1e",
          "base-200": "#141414",
          "base-300": "#0A0A0A",
          primary: "#90f1ef",
          secondary: "#f0da50",
        },
      },
    ],
  },
  theme: {
    extend: {
      keyframes: keyframes,
      animation: animation,
      screens: {
        xs: "400px",
      },
      maxWidth: {
        xxs: "250px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
export default config;

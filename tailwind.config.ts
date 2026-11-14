import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: "#F2F1EC",
        ink: "#191A17",
        "signal-red": "#EF3D24",
        "rule-grey": "#BDBDB4",
        "secondary-surface": "#E5E4DE",
        "muted-ink": "#66665F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

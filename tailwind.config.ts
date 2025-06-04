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
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#060635",
        primary: "#504CEC",
        gray1: "#6A6A86",
        white: "#FFFFFF",
        borderColor: "#E0E0E0",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        alice: ["var(--font-alice)", "serif"],
        bricola: ["var(--font-bricolageGrotesque)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

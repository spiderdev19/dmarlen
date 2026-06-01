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
        primary: "#8B2252",
        "primary-dark": "#6B1A40",
        "primary-medium": "#993556",
        "light-pink": "#FBEAF0",
        "soft-pink": "#F4C0D1",
        gold: "#C9A96E",
        whatsapp: "#25D366",
        "text-main": "#333333",
        "text-gray": "#888780",
        "card-title": "#2C2C2A",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

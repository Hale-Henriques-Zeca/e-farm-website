import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        farmGreen: "#2D5A27", // Verde floresta/agrícola
        farmLeaf: "#4ADE80",  // Verde vibrante para detalhes
        farmBrown: "#4B3621", // Castanho terra para pecuária
        farmSoil: "#A52A2A",  // Castanho avermelhado
        farmGold: "#FFD700",  // Sol/Realeza
        farmBlack: "#0B0C0B", // Fundo escuro elegante
      },
    },
  },
  plugins: [],
};
export default config;

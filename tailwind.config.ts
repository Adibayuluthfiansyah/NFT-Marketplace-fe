import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5a0bb8", 
        "background-light": "#f7f5f8",
        "background-dark": "#191022",
        "surface-dark": "#2a2136",
        "dark-base": "#141118",      
        "dark-surface": "#1e1a24",   
        "dark-border": "#302839",     
        "text-secondary": "#ab9cba", 
        "card-dark": "#211b27",     
        "border-dark": "#473b54",    
        "text-muted": "#ab9cba",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-noto-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
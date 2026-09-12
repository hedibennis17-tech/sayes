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
        "sy-bg": "var(--sy-bg)",
        "sy-surface": "var(--sy-surface)",
        "sy-surface-2": "var(--sy-surface-2)",
        "sy-border": "var(--sy-border)",
        "sy-primary": "var(--sy-primary)",
        "sy-accent": "var(--sy-accent)",
        "sy-green": "var(--sy-green)",
        "sy-text": "var(--sy-text)",
        "sy-text-muted": "var(--sy-text-muted)",
      },
      borderRadius: {
        "sy": "var(--sy-radius)",
      },
    },
  },
  plugins: [],
};

export default config;

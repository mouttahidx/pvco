/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeSlider: "url('/img/homeSlider.webp')",
        aboutSlider: "url('/img/workers.webp')",
        portfolioSlider: "url('/img/product (7).webp')",
        servicesSlider: "url('/img/services/services-new.webp')",
        careersSlider: "url('/img/careers-new.webp')",
        workers: "url('/img/workers.webp')",
        doors:"url('/img/product (3).webp')",
        doorsGarage:"url('/img/product (6).webp')",
        windows:"url('/img/product (5).webp')",
        balcons:"url('/img/product (2).webp')",
        solarium:"url('/img/product (7).webp')",
        exterior:"url('/img/product (8).webp')",
        accessories:"url('/img/product (1).webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "brand-gray": "#F2F2F2",
        "secondary": "#FFE9E4",
      },
      container: {
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};

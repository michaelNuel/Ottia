import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "#FFF4F4",
      },
      width: {
        custom: "570px", // Adding custom width
      },
      fontSize: {
        'customLarge': ['70px', { lineHeight: '5rem' }], // Custom text size with line height
      },
      translate: {
        '1/2': '-170%', // Negative 140% translate
        '1/4': '-15%',
        
      },
      margin: {
        '-1/2': '-500%', // Negative margin bottom 50%
        '-1/4': '-25%', // Negative margin bottom 25%
        '5/8': '-225px', // Negative margin bottom 15px
        // Add more negative margins as needed
      },
    },
  },
  plugins: [],
};
export default config;

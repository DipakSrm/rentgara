import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem", // Small font size
        base: "1rem", // Default font size
        lg: "1.125rem", // Large font size
        xl: "1.25rem", // Extra large font size
      },
      colors: {
        primary: "#fffff", // Example primary color
        secondary: "f4f4f4", // Example secondary color
      },
    },
  },
  plugins: [],
};
export default config;

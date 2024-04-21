const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  darkMode: "class",
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
        secondary: "#f4f4f4", // Example secondary color
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "#f4f4f4", // Use secondary color as background
      },
    },
  },
  plugins: [addVariablesForColors, require("flowbite/plugin")],
};
export default config;

//this is for adding variables for colors
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

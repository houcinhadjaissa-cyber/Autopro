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
        primary: {
          DEFAULT: "#6FB81A",
          hover: "#5A9415",
          pressed: "#457010",
        },
        canvas: "#0B0E11",
        surface: {
          1: "#1E293B",
          2: "#334155",
        },
        success: "#6FB81A",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
};
export default config;

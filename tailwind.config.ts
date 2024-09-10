import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-dark": "url('/background-dark.jpg')",
        "image-light": "url('/background-light.jpg')",
      },
      backgroundSize: {
        "auto-100": "auto 100vh",
        "100-auto": "100vh auto",
      },
      minWidth: {
        "76": "19rem",
      },
      height: { "76": "19rem" },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;

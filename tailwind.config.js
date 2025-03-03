/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx, mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx, mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;

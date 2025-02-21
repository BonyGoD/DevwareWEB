/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
            "./node_modules/@nextui-org/theme/dist/components/button.js",
            './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}


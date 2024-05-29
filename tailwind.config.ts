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
      },
      spacing: {
        appbarHeight: "var(--appbar-height)",
        sidebarWidth: "var(--sidebar-width)",
      },
      colors: {
        "primary": "hsl(var(--primary))",
        "primary-100": "hsl(var(--primary-100))",
        "primary-200": "hsl(var(--primary-200))",
        "primary-300": "hsl(var(--primary-300))",
        "primary-400": "hsl(var(--primary-400))",
        "primary-500": "hsl(var(--primary-500))",
        "primary-600": "hsl(var(--primary-600))",
        "primary-700": "hsl(var(--primary-700))",
        "primary-800": "hsl(var(--primary-800))",
        "primary-900": "hsl(var(--primary-900))",

        "foreground": "hsl(var(--foreground))",
        "foreground-100": "hsl(var(--foreground-100))",
        "foreground-200": "hsl(var(--foreground-200))",
        "foreground-300": "hsl(var(--foreground-300))",
        "foreground-400": "hsl(var(--foreground-400))",
        "foreground-500": "hsl(var(--foreground-500))",
        "foreground-600": "hsl(var(--foreground-600))",
        "foreground-700": "hsl(var(--foreground-700))",
        "foreground-800": "hsl(var(--foreground-800))",
        "foreground-900": "hsl(var(--foreground-900))",

        "background": "hsl(var(--background))",
      },
    },
  },
  plugins: [],
};
export default config;

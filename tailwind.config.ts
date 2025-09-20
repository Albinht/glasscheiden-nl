import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glasbak': {
          geel: '#FFC000',
          donkergeel: '#FFB000',
          zwart: '#000000',
          wit: '#FFFFFF',
          grijs: '#F5F5F5',
          donkergrijs: '#333333',
          lichtgrijs: '#E5E5E5',
          blauw: '#C5DCF1',
        },
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
        'heading': ['Arial Black', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
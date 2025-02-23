/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        bgSec: "#fcf8f3",
        putih: "#ffffff",
        terang: "#f3f4f5",
        gray1: "#333333",
        gray2: "#3a3a3a",
        gray3: "#616161",
        gray4: "#898989",
        gray5: "#b0b0b0",
        gray6: "#d8d8d8",
        gray7: "#F4F5F7",
        ijo: "#2ec2ac",
        abang: "#e87172",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        scroll2: "scroll2 25s linear infinite",
      },
    },
  },
  plugins: [],
};

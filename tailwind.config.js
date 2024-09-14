/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        content: "90%",
      },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(259px, 1fr))",
      },
      boxShadow: {
        custom: "1px 1px 20px #012290f7, 1px 1px 40px #0053b8f7",
      },
      backgroundImage: {
        logo: "url('/src/assets/hero.jpg')",
      },
      padding: {
        "90px": "90px",
        "10p": "10%",
      },
      colors: {
        textColor: "#ededed",
        customBlue: "#051129",
        customCyan: "rgb(0,255,255)",
      },
      keyframes: {
        animateBar: {
          "100%": { strokedashoffset: -1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        slideTop: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        slideBottom: {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        showText: {
          "100%": { opacity: 1 },
        },
      },
      animation: {
        animateBar: "animateBar 1s linear forwards",
        slideRight: "slideRight 1s ease forwards",
        slideTop: "slideTop 0.5s ease forwards",
        slideBottom: "slideBottom 1s ease forwards",
        slideLeft: "slideLeft 1s ease forwards",
        showText: "showText 0.5s 1s linear forwards",
      },
    },
  },
  plugins: [],
};

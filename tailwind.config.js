/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        mediumseagreen: "#229b55",
        "neutral-50": "#f9fafa",
        whitesmoke: "rgba(249, 250, 250, 0.75)",
        "neutral-300": "#5f6365",
        "neutral-500": "#101619",
        gray: {
          "100": "#7d7e79",
          "200": "#141414",
          "300": "#0e0e0e",
          "400": "rgba(17, 17, 17, 0.4)",
          "500": "rgba(255, 255, 255, 0.15)",
          "600": "rgba(255, 255, 255, 0.24)",
          "700": "rgba(145, 148, 149, 0.24)",
          "800": "rgba(145, 148, 149, 0.15)",
        },
        silver: "#c8c9c4",
        gainsboro: "rgba(228, 228, 227, 0.65)",
        darkgray: {
          "100": "rgba(152, 169, 179, 0.15)",
          "200": "rgba(154, 169, 177, 0.5)",
        },
        "primary-500": "#1e455a",
        "neutral-3001": "#5a5d5c",
        "neutral-5001": "#080d0b",
        "primary-50": "#e9ecef",
        "primary-700": "#153140",
        "primary-900": "#0d1d26",
        "primary-400": "#4b6a7b",
      },
      spacing: {},
      fontFamily: {
        "headline-headline-2-medium": "Manrope",
        "body-medium-regular": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "11xs-7": "1.7px",
        "11xs-6": "1.6px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      lg: "18px",
      "29xl": "48px",
      "5xl": "24px",
      xs: "12px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

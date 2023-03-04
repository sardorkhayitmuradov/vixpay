/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      PoppinsRegular: ["PoppinsRegular"],
      PoppinsMedium: ["PoppinsMedium"],
      PoppinsSemibold: ["PoppinsSemibold"],
      PoppinsBold: ["PoppinsBold"],
      
      NanumGothicRegular: ["NanumGothicRegular"],
      NanumGothicBold: ["NanumGothicBold"],
      NanumGothicExtraBold: ["NanumGothicExtraBold"],

      RubikRegular: ["RubikRegular"],
      RubikMedium: ["RubikMedium"],
      RubikSemibold: ["RubikSemibold"],
      RubikBold: ["RubikBold"],

      NotoSansKoreanRegular: ["NotoSansKoreanRegular"],
      NotoSansKoreanMedium: ["NotoSansKoreanMedium"],
      NotoSansKoreanBold: ["NotoSansKoreanBold"],
    },
    maxWidth: {
      xs: '450px',
      xl: '1200px',
    },
    screens: {
      xs: '450px',
      xl: '1290px',
    },
    extend: {
    },
  },
  plugins: [],
}

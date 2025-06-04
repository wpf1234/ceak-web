const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#104862',    // 深蓝
        icon: '#f2f2f2',       // Icon的颜色
        hc: '#333333fc',
        tc: '#333333',
      }, 
      height: {
        '80svh': '80svh',
        '100svh': '100svh',
      },
      maxHeight: {
        '90svh': '90svh',
      },
      minHeight: {
        '80svh': '80svh',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}


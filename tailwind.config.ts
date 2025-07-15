import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemonMilkLight: ['LemonMilk-light', 'sans-serif'],
        lemonMilkRegular: ['LemonMilk-Regular', 'sans-serif'],
        lemonMilkBold: ['LemonMilk-Bold', 'sans-serif']
      },
      colors: {
        purple: {
          brandPurle: "#A829F9",
          purpleOpacity: "#A829F933"
        },
        orange: {
          brandOrange:"#FF870A",
        },
        green: {
          brandGreen: "#A1FD03",
        },
        blue: {
          brandBlue: "#3FF5D2"
        },
      },
      backgroundImage: {
        'gradient-custom-purple': 'linear-gradient(198.53deg, #D189FF -1.98%, #A829F9 47.24%)',
        'gradient-linear-purple': "linear-gradient(98.99deg, #A829F9 2.49%, #C76FFF 97.55%)",
        'gradient-linear-orange': "linear-gradient(117.45deg, #FF870A 5.56%, #FFAF46 70.8%, #FFBF5F 96.88%)",
        'gradient-linear-green': "linear-gradient(95.09deg, #A1FD03 21.42%, #BFFF78 97.64%)",
        'gradient-linear-blue': "linear-gradient(98.99deg, #3FF5D2 2.49%, #92FFEA 97.55%)",
        'gradient-radial-brandBlue': 'radial-gradient(circle at center, #92FFEA, #3FF5D2)',
      },
      animation: {
        pulseScale: 'pulseScale 3s infinite ease-in-out',
        'flash-bug': 'flash-bug 2s ease-in-out 1s',
        'float-slow': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'flash-bug': {
          '0%': { opacity: '1' },
          '5%': { opacity: '0' },
          '10%': { opacity: '1' },
          '15%': { opacity: '0' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0' },
          '60%': { opacity: '1' },
          '70%': { opacity: '0' },
          '80%': { opacity: '1' },
          '100%': { opacity: '1' }, // Fica normal após as piscadas
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

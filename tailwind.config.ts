import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          "from":{
            transform: "translateX(0px)"
          },
          "to":{
              transform: "translateX(30px)"
          },
        },
        social: {
          "from":{
            transform: "translateX(0px)"
          },
          "to":{
              transform: "translateX(20px)"
          },
        },
      },
      animation: {
        wiggle: 'wiggle 4s cubic-bezier(0.79,-0.06, 0.2, 1) 0s 1 forwards',
        social: 'social 3s ease-in-out 0s 1 forwards',
      },
    },
  },
  plugins: [],
}
export default config

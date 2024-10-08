import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': {
            transform: 'translateY(12px)',
            animation_timing_function: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animation_timing_function: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        typing: {
          from: { backgroundSize: '0 200%' },
        },
      },
      animation: {
        floating: 'floating 4s infinite',
        typewriter: 'typing calc(var(--n)*.1s) steps(var(--n)) forwards',
      },
      colors: {
        'cod-gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#0d0d0d',
        },
        'cherokee': {
          '50': '#fdf9ef',
          '100': '#fbf1d9',
          '200': '#f6e0b2',
          '300': '#f2cf8d',
          '400': '#eaaa4d',
          '500': '#e4912b',
          '600': '#d67820',
          '700': '#b15d1d',
          '800': '#8e4a1e',
          '900': '#723e1c',
          '950': '#3e1e0c',
        },
        'taupe': {
          '50': '#f5f5f1',
          '100': '#e7e6da',
          '200': '#d1cdb7',
          '300': '#b7af8d',
          '400': '#a1966e',
          '500': '#928560',
          '600': '#7d6e51',
          '700': '#655643',
          '800': '#57493c',
          '900': '#40362e',
          '950': '#2b231d',
        },
      }
    },
  },
  plugins: [],
} satisfies Config;

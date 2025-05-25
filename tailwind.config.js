/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./dist/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        secondary: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
        },
        background: {
          DEFAULT: '#F8FAFC',
          dark: '#F1F5F9',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{js,jsx}', 'src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
<<<<<<< HEAD
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        success: {
          50: "var(--success-50)",
          500: "var(--success-500)",
          600: "var(--success-600)",
        },
        warning: {
          50: "var(--warning-50)",
          500: "var(--warning-500)",
        },
        error: {
          50: "var(--error-50)",
          500: "var(--error-500)",
=======
    colors: {
      primary: {
        50: '#f0f4f8',
        100: '#d9e2ec',
        200: '#bcccdc',
        300: '#9fb3c8',
        400: '#829ab1',
        500: '#627d98',
        600: '#486581',
        700: '#334e68',
        800: '#243b53',
        900: '#102a43',
      },
      gray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      accent: {
        royal: '#4169e1',
        navy: '#001f3f',
      },
      corporate: {
        navy: '#001F54',
        'royal-blue': '#0056D2',
        white: '#FFFFFF',
        'light-gray': '#F4F7FA',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', ...fontFamily.sans],
        display: ['Poppins', ...fontFamily.sans],
        body: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5ff',
          400: '#36a7ff',
          500: '#0088ff',
          600: '#006ee6',
          700: '#0054b3',
          800: '#004494',
          900: '#003175',
        },
        accent: {
          gold: {
            50: '#fff9e6',
            100: '#ffedb3',
            200: '#ffe180',
            300: '#ffd54d',
            400: '#ffc91a',
            500: '#e6b300',
            600: '#b38a00',
            700: '#806200',
            800: '#4d3a00',
            900: '#1a1300',
          },
          royal: {
            50: '#e6f0ff',
            100: '#b3d1ff',
            200: '#80b3ff',
            300: '#4d94ff',
            400: '#1a75ff',
            500: '#0047ab',
            600: '#003d8f',
            700: '#002d66',
            800: '#001c3d',
            900: '#000b14',
          },
>>>>>>> a8b666650ccefab4098a9be420e2c378c4cb3d5f
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
<<<<<<< HEAD
            transform: "tranlate(0px, 0px) scale(1)",
          },
        }
=======
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
          },
        },
>>>>>>> a8b666650ccefab4098a9be420e2c378c4cb3d5f
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        blob: "blob 7s infinite",
<<<<<<< HEAD
=======
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-left': 'fade-in-left 0.6s ease-out',
        'fade-in-right': 'fade-in-right 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
>>>>>>> a8b666650ccefab4098a9be420e2c378c4cb3d5f
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
<<<<<<< HEAD
};
=======
};
>>>>>>> a8b666650ccefab4098a9be420e2c378c4cb3d5f

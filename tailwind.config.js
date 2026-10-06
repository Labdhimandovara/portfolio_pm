/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        surface: '#FFFFFF',
        'surface-subtle': '#F4F3EF',
        'border-subtle': '#E7E5DF',
        'text-main': '#121214',
        'text-muted': '#646469',
        'accent-primary': '#2D5BFF',
        'accent-amber': '#E07A5F',
        'accent-sage': '#3D5A50',
        'accent-lavender': '#8338EC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'glass-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(18, 18, 20, 0.04), 0 2px 6px -1px rgba(18, 18, 20, 0.02)',
        'card-hover': '0 24px 48px -12px rgba(18, 18, 20, 0.08), 0 4px 12px -2px rgba(18, 18, 20, 0.03)',
        'float': '0 25px 50px -12px rgba(45, 91, 255, 0.12)',
        'glow-subtle': '0 0 30px -5px rgba(45, 91, 255, 0.15)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter', 'Söhne', 'Helvetica Neue', 'Arial', 'sans-serif'
        ]
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#fff',
        },
        background: '#fff',
        foreground: '#1a1a1a',
        border: '#e5e7eb',
        card: '#fff',
        'card-foreground': '#1a1a1a',
      },
      borderRadius: {
        xl: '1rem',
        full: '9999px',
      },
      maxWidth: {
        '7xl': '80rem',
      }
    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette "média premium" — sobre, sérieuse, contraste fort pour la lecture
        ink: {
          50: '#f6f6f5',
          100: '#e8e8e6',
          200: '#d0d0cc',
          300: '#a9a9a2',
          400: '#7d7d74',
          500: '#5f5f57',
          600: '#4a4a44',
          700: '#3d3d39',
          800: '#2a2a27',
          900: '#1a1a18',
          950: '#0d0d0c',
        },
        accent: {
          DEFAULT: '#d4663a', // orange brique subtil — identité FR sans être criard
          dark: '#b5502a',
          light: '#e48d66',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Charter',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        article: '44rem', // ~720px, optimal pour la lecture longue
        wide: '76rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.800'),
            maxWidth: '44rem',
            'h1, h2, h3, h4': {
              color: theme('colors.ink.900'),
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: { marginTop: '2.5em', marginBottom: '0.75em' },
            h3: { marginTop: '2em', marginBottom: '0.5em' },
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              '&:hover': { color: theme('colors.accent.dark') },
            },
            blockquote: {
              borderLeftColor: theme('colors.accent.DEFAULT'),
              fontStyle: 'normal',
              color: theme('colors.ink.700'),
            },
            code: {
              color: theme('colors.ink.900'),
              backgroundColor: theme('colors.ink.100'),
              padding: '0.15em 0.35em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            table: {
              fontSize: '0.925em',
            },
            'th, td': {
              borderColor: theme('colors.ink.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

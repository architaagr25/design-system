import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // include all component and story files
  ],
  darkMode: 'class',  // enables dark mode via class="dark"
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',     // Blue-600
        secondary: '#9333EA',   // Purple-600
        tertiary: '#0ea5e9',    // Sky-500

        success: '#10B981',     // Green-500
        warning: '#F59E0B',     // Amber-500
        error: '#EF4444',       // Red-500
        info: '#3B82F6',        // Blue-500

        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};

export default config;

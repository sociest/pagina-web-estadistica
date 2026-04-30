import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        umsa: {
          blue: '#00447e',
          orange: '#ea580c',
          'white-soft': '#f5f5f5',
          crema: '#f8fafc',
          perla: '#fafafa',
          'white-cards': '#fcfcfc',
          'white-delicate': '#fefefe',
          'border-light': '#e2e8f0',
          'border-medium': '#cbd5e1',
          'text-suave': '#64748b',
          'text-medio': '#374151',
          'black-deep': '#1e293b',
          annotations: '#94a3b8',
        },
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(135deg, #00447e 0%, #003a6b 50%, #00325a 100%)',
        'gradient-footer': 'linear-gradient(170deg, #001d3d 0%, #003d6e 50%, #00447e 100%)',
        'gradient-cta': 'linear-gradient(135deg, #00447e 0%, #00447ecc 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ea580c 0%, #ea580ccc 100%)',
        'gradient-sia': 'linear-gradient(135deg, #ffffff 0%, #e8f4f8 100%)',
      },
      fontSize: {
        'xs': ['13px', { lineHeight: '1.4' }],    
        'sm': ['15px', { lineHeight: '1.5' }],    
        'base': ['17px', { lineHeight: '1.6' }],  
        'lg': ['19px', { lineHeight: '1.6' }],            
        'h1-hero': ['28px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-section': ['24px', { lineHeight: '1.2', fontWeight: '900' }],
        kpi: ['48px', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.05em' }],
        'nav-destkop': ['11px', { lineHeight: '1', fontWeight: '600' }],
      },
      borderRadius: {
        'xl-umsa': '12px',
        '2xl-umsa': '16px',
        '3xl-umsa': '24px',
      },
      boxShadow: {
        'umsa-dropdown': '0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,68,126,0.2)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
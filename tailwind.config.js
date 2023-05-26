const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./src/**/*.njk"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    colors: {
      primary: '#ff5400',
      secondary: '#86c7f0',
      light: '#f3f3f3',
      dark: '#252525'
    },
    fontSize: {
      // https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
      200: 'clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)',
      300: 'clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)',
      400: 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)',
      500: 'clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)',
      600: 'clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)',
      700: 'clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)',
      800: 'clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)',
      900: 'clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    spacing: {
      // https://utopia.fyi/space/calculator/?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)'
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      fontWeight: 'font',
      lineHeight: 'leading',
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
    })
  ]
};
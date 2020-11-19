const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    primary: '#ff00ff',
    light: '#ffffff',
    dark: '#252525',
  },
  fonts: {
    base: 'Helvetica, sans-serif',
    serif: 'Georgia, serif',
  },
  sizeScale: {
    300: '0.8rem',
    400: '1rem',
    500: '1.25rem',
    600: '1.56rem',
    700: '1.95rem',
    800: '2.44rem',
    900: '3.05rem',
  },
};

module.exports = {
  theme: theme,
  tokens: {
    bg: {
      items: theme.colors,
      property: 'background',
    },
    color: {
      items: theme.colors,
      property: 'color',
      variable: true,
    },
    font: {
      items: theme.fonts,
      property: 'font-family',
      variable: true,
    },
    'gap-top': {
      items: theme.sizeScale,
      property: 'margin-top',
    },
    'gap-bottom': {
      items: theme.sizeScale,
      property: 'margin-bottom',
    },
    leading: {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      property: 'max-width',
    },
    'pad-top': {
      items: theme.sizeScale,
      property: 'padding-top',
    },
    'pad-bottom': {
      items: theme.sizeScale,
      property: 'padding-bottom',
    },
    'pad-left': {
      items: theme.sizeScale,
      property: 'padding-left',
    },
    size: {
      items: theme.sizeScale,
      variable: true,
    },
    text: {
      items: theme.sizeScale,
      responsive: true,
      property: 'font-size',
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
  },
};

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
    base: '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
  },
  sizeScale: {
    200: 'var(--space-3xs-2xs)',
    300: 'var(--space-2xs-xs)',
    400: 'var(--space-xs-s)',
    500: 'var(--space-s-m)',
    600: 'var(--space-m-l)',
    700: 'var(--space-l-xl)',
    800: 'var(--space-xl-2xl)',
    900: 'var(--space-2xl-3xl)',
  },
  textScale: {
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-1)',
    600: 'var(--step-2)',
    700: 'var(--step-3)',
    800: 'var(--step-4)',
    900: 'var(--step-5)',
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
        'extra-tight': '1.067',
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
    size: {
      items: theme.sizeScale,
      variable: true,
    },
    text: {
      items: theme.textScale,
      responsive: true,
      property: 'font-size',
      variable: true,
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        medium: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
  },
};

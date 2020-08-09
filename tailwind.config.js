module.exports = {
  theme: {
    fontFamily: {
      title: [ '"Montserrat"', 'sans-serif' ],
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [ 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif' ],
      mono: [ 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace' ],
    },
  },
  variants: {
    opacity: [ 'responsive', 'hover', 'focus', 'active', 'group-hover' ],
    scale: [ 'responsive', 'hover', 'focus', 'active', 'group-hover' ],
    textColor: [ 'responsive', 'hover', 'focus', 'active', 'group-hover' ],

  },
  plugins: [],
  purge: false,
};

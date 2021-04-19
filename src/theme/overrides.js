import TeleNeoWeb from '../assests/fonts/TeleNeoWeb-Regular.woff2';
import palette from './palette';

export const teleNeoWeb = {
  fontFamily: 'TeleNeoWeb',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: '500',
  src: `
  local('TeleNeoWeb'),
  local('TeleNeoWeb-normal'),
  url(${TeleNeoWeb}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const overrides = {
  MuiAutocomplete: {
    root: {
      paddingTop: '3px',
    },
    inputRoot: {
      '&&[class*="MuiInput-root"] $input': {
        padding: '6px 0 6px',
      },
    },
  },
  MuiAppBar: {
    root: { boxShadow: 'none' },
  },
  MuiCssBaseline: {
    '@global': {
      '@font-face': [teleNeoWeb],
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: '12px',
    },
  },

  MuiFormLabel: {
    root: {
      fontSize: '20px',
      color: palette.DavyGrey,
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: '0',
    },
  },
  MuiBreadcrumbs: {
    separator: {
      marginLeft: '0',
    },
  },
};

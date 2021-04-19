import { colors } from '@material-ui/core';

const white = '#ffffff';
const black = '#000000';
const blackLight = '#000000DE';
const DavyGrey = '#333333';

const greyMain = '#f7f8f8';
const semiGrey = '#f7f7f8';
const greyDark = '#e4e5e5';
const boxShadow = '#777777';

const magentaMain = '#96cb10';
const magentaDark = '#96cb98';
const magentaLight = '#96cb00';

const pinkMain = '#96cb41';
const pinkDark = '#81b231';
const pinkLight = '#F2FCEA';

const functionalRed = '#d90000';
const functionalYellow = '#fecb00';
const functionalGreen = '#46a800';
const functionalBlue = '#009de0';
const grayOneZeroSeven = '#6b6b6b';
const grayOneSevenEight = '#b2b2b2';
const grayTwoZeroEight = '#d0d0d0';
const grayTwoTwoOne = '#dddddd';
const grayTwoThreeZero = '#e6e6e6';

const screenLightBlueLight = '#7ecbf5';

const azureBlue = 'rgba(0, 164, 239, 0.7)';
const fciMagenta = 'rgba(226, 0, 116, 0.7)';
const amazonYellow = 'rgba(255, 153, 0, 0.7)';
const googleGreen = 'rgba(60, 186, 84, 0.7)';
const otcGray = 'rgba(164, 164, 164, 0.7)';

const palette = {
  semiGrey,
  black,
  white,
  blackLight,
  greyMain,
  greyDark,
  DavyGrey,
  boxShadow,
  functionalRed,
  functionalYellow,
  functionalGreen,
  functionalBlue,
  grayOneZeroSeven,
  grayOneSevenEight,
  grayTwoThreeZero,
  grayTwoZeroEight,
  grayTwoTwoOne,
  screenLightBlueLight,
  azureBlue,
  fciMagenta,
  amazonYellow,
  googleGreen,
  otcGray,
  common: {
    black,
    white,
  },
  primary: {
    contrastText: white,
    dark: `${pinkDark}`,
    main: `${pinkMain}`,
    light: `${pinkLight}`,
  },
  secondary: {
    contrastText: white,
    dark: `${magentaDark}`,
    main: `${magentaMain}`,
    light: `${magentaLight}`,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    default: white,
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[300],
  table: {
    selectedRowBg: '#bdbdbd',
    textColor: '#263238',
    headerTextColor: '#707070',
    headerBg: '#f5f5f5',
    hover: '#e0e0e0',
    stripe: {
      odd: '#FAFAFA',
    },
    headerRowBg: '#EDEDED',
  },
};

export default palette;

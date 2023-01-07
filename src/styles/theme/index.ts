import { createTheme } from '@mui/material/styles';

// https://mui.com/material-ui/about-the-lab/#typescript
import type {} from '@mui/lab/themeAugmentation';

import { inter } from '../fonts';
import { COLORS } from '../variables';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    huge: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.orange,
    },
    secondary: {
      main: COLORS.blue,
    },
    success: {
      main: COLORS.green,
    },
    error: {
      main: COLORS.red,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: 54,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 700,
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            boxShadow: 'none',
            border: 'none',
            color: COLORS.blue,
          },
        },
        outlined: {
          boxShadow: '0px 2px 4px rgba(88, 32, 0, 0.1)',
          backgroundColor: COLORS.white,
          lineHeight: 0,
          border: 'none',
          fontWeight: 700,
          ':hover': {
            border: 'none',
            backgroundColor: COLORS.white,
            boxShadow: '0px 1px 1px rgba(88, 32, 0, 0.2)',
          },
          ':active': {
            backgroundColor: COLORS.white,
            background: COLORS.extraLightOrange,
            boxShadow: 'inset 0px 2px 2px rgba(88, 32, 0, 0.2)',
          },
        },
      },
      variants: [
        {
          props: { size: 'huge' },
          style: { padding: '17px 40px', fontSize: '24px' },
        },
      ],
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          border: 'none !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: COLORS.lightOrange,
          },
          '& :hover': {
            '& fieldset': {
              borderColor: `${COLORS.lightOrange} !important`,
              boxShadow: '0px 1px 1px rgba(88, 32, 0, 0.2)',
            },
          },
          '&.Mui-focused fieldset': {
            borderColor: COLORS.orange,
          },
        },
      },
    },
  },
});
export default theme;

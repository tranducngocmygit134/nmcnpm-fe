/** Material ui */
import { createMuiTheme } from '@material-ui/core/styles';

/** Custom theme using material ui */
const theme = createMuiTheme({
  common: {
    orange: 'rgb(253, 216, 53)',
    text: '#616161',
    border: '1px solid #bdbdbd',
    brandWidth: 320,
    backgroundColor: 'rgb(239, 239, 239)',
  },
  palette: {
    primary: {
      main: 'rgb(24, 158, 255)',
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
      '@media screen and (max-width: 700px)': {
        fontSize: '1.2rem',
      },
    },
    h2: {
      fontSize: '1.2rem',
    },
    h3: {
      fontSize: '0.95rem',
    },
    body1: {
      fontSize: '0.85rem',
      color: 'rgb(51, 51, 51)',
      fontWeight: 550,
    },
    subtitle1: {
      color: '#616161',
      fontSize: '0.9rem',
    },
    subtitle2: {
      color: '#616161',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#bdbdbd',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '100vw',
      },
    },
  },
});

/** Export */
export default theme;

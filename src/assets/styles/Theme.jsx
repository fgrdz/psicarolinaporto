import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C4A63',
    },
    secondary: {
      main: '#CED9DF',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontWeight: 500,
      fontFamily: 'Clemente, sans-serif',
      color: '#2C4A63',
    },
    h2: {
      fontWeight: 500,
      fontSize: '50px',
      fontFamily: 'Clemente, sans-serif',
      color: '#2C4A63',
    },
    title: {
      color: '#2C4A63',
      fontSize: '32px',
      fontWeight: 500,
      fontFamily: 'Clemente, sans-serif',
    },
    h3: {
      color: '#636363',
      fontSize: '24px',
      fontWeight: 400,
    },
    h4: {
      fontWeight: 500,
      fontSize: '32px',
      fontFamily: 'Clemente, sans-serif',
      color: '#2C4A63',
    },
    h5: {
      color: '#636363',
      fontSize: '20px',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    h6: {
      color: '#2C4A63',
      fontSize: '32px',
      fontWeight: 400,
      fontStyle: 'italic',
    },
    body1: {
      fontSize: '16px',
      textAlign: 'justify',
      fontWeight: '500',
    },
    body2: {
      fontSize: '16px',
      textAlign: 'justify',
      fontWeight: '600',
      color: '#828282',
    },
  },
});

export default theme;

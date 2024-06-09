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
    h2: {
      fontWeight: 500,
      fontSize: '50px',
      fontFamily: 'Clemente, sans-serif',
      color: '#2C4A63',
    },
    h3: {
      color: '#828282',
      fontSize: '24px',
      fontWeight: 300,
    },
  },
});

export default theme;

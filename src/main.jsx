import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './assets/styles/reset.css';
import './assets/styles/style.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './assets/styles/Theme.jsx';
import { AppProvider } from './components/hooks/context.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

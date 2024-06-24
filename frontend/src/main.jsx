import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deDE } from '@mui/x-date-pickers/locales';

// Roboto fonts via npm
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Define the dark theme
const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  { locale: deDE }, // use 'de' locale for UI texts (start, next month, ...)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

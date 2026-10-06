import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import stripePromisse from './Config/stripeConfig';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './services/theme/standard';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromisse}>
          <BrowserRouter>
          <Router/>
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)

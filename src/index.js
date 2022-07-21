import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

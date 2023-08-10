import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextProvider from './Context/ShopContextProvider';

ReactDOM.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById('root')
);

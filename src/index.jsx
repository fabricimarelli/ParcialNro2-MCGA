import React from 'react';
import ReactDOM from 'react-dom';
import ProductsApp from './ProductsApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductsApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

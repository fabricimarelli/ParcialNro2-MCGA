import React, { useEffect } from 'react';
import { MainRouter } from './routes/MainRouter';
import './ProductApp.module.css';

function ProductsApp() {
  useEffect(() => {
    return () => {};
  }, []);
  return <MainRouter />;
}

export default ProductsApp;

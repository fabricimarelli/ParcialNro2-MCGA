import React, { useEffect } from 'react';
import { ProductList } from './ProductList';
import styles from './ProductScreen.module.css';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import { getProductsAsync } from '../../redux/actions/productsAction';

export const ProductScreen = () => {
  const history = useHistory();
  const { list: products, error, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  const handleAddClick = () => {
    history.push('products/create');
  };

  const handleModifyProduct = (id) => {
    history.push(`/products/update/${id}`);
  };

  return (
    <div className={styles.titleProduct}>
      <h2>Products</h2>
      <button className={styles.newButton} onClick={handleAddClick}>
        New Product
      </button>
      {isLoading && (
        <div className={styles.loadingBar}>
          <LinearProgress />
        </div>
      )}
      <p>{error}</p>
      <ProductList products={products} onModify={handleModifyProduct} />
    </div>
  );
};

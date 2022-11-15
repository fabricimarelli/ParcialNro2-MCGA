import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './Product';

export const ProductList = ({ products, onModify }) => {
  return products.map((product) => (
    <Product key={product._id} product={product} onModify={onModify} />
  ));
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onModify: PropTypes.func.isRequired,
};

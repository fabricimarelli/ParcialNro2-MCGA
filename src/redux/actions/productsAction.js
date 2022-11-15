import axios from 'axios';//libreria para pegarle a la api
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_ERROR,
  SET_LOADING_TRUE,
} from '../types/productsTypes';

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};
export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};
export const setProducts = (products) => {
  return {
    type: SET_ALL_PRODUCTS,
    payload: products,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const getProductsAsync = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.get('http://localhost:3000/products');

    if (res.status === 200) {
      let products = [];

      for (let i = 0; i < res.data.length; i++) {
        products.push(res.data[i]);
      }
      return dispatch(setProducts(products));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));//Para que no rompa el sistema cuando tira un error
  }
};

export const deleteProductAsync = (productId) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products/${productId}`
    );
    if (res.status === 200) {
      return dispatch(deleteProduct(productId));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

export const updateProductAsync = (product) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products/${product.id}`,
      product
    );
    if (res === 200) {
      return dispatch(updateProduct(product));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

export const createProductAsync = (product) => async (dispatch) => {
  dispatch(setLoadingTrue());

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products`,
      product
    );
    if (res === 201) {
      return dispatch(createProduct(res.data));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

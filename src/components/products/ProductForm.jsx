import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './ProductForm.module.css';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateProductAsync,
  createProductAsync,
} from '../../redux/actions/productsAction';
import Button from '@mui/lab/LoadingButton';

const initialState = {
  name: '',
  brand: '',
  stock: '',
  description: '',
  price: '',
};

export const ProductForm = () => {
  const [values, handleInputChange, , setAllValues] = useForm(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const { action, productId } = useParams();
  const productToModify = useSelector((state) =>
    state.products.list.find((product) => product._id === productId)
  );
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    if (action !== 'update' && action !== 'create') {
      history.replace('/products');
      return;
    }

    if (action === 'update') {
      if (productToModify) {
        setAllValues(productToModify);
      } else {
        history.replace('/products');
      }
    }
    return () => {};
  }, []);

  const handleCancel = () => {
    history.push('/products');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.name.length === 0 ||
      values.brand.length === 0 ||
      values.stock.length === 0 ||
      values.description.length === 0 ||
      values.price.length === 0
    ) {
      return;
    }
    if (action === 'update') {
      await dispatch(
        updateProductAsync({
          ...values,
          id: productId,
        })
      );
    } else {
      await dispatch(createProductAsync({ ...values }));
    }
    history.push('/products');
  };

  return (
    <form action="">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="brand"
        id="brand"
        placeholder="Brand"
        value={values.brand}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="stock"
        id="stock"
        placeholder="Stock"
        value={values.stock}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price"
        value={values.price}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        value={values.description}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <div className={styles.actionsContainer}>
        <Button
          color="primary"
          variant="contained"
          disableRipple
          type="submit"
          loading={isLoading}
          onClick={handleSubmit}
        >
          {action.toUpperCase()}
        </Button>
        <Button variant="outlined" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

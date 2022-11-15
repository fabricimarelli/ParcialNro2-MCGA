import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes as DeleteIcon } from 'react-icons/fa';
import { MdEdit as EditIcon } from 'react-icons/md';
import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from '../../redux/actions/productsAction';

export const Product = ({ product, onModify }) => {
  const { _id, name, brand, stock, description, price } = product;
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.title}>Name - Brand</span>
        <span className={styles.content}>{name + ' ' + brand}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Stock</span>
        <span className={styles.content}>{stock}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Description</span>
        <span className={styles.content}>{description}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Price</span>
        <span className={styles.content}>{price}</span>
      </div>
      <div className={styles.actions}>
        <EditIcon className={styles.editIcon} onClick={() => onModify(_id)} />
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => dispatch(deleteProductAsync(_id))}
        />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onModify: PropTypes.func.isRequired,
};

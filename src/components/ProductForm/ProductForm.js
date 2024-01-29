import React from 'react';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = ({ colors, sizes, currentColor, currentSize, setCurrentColor, setCurrentSize, onAddToCart }) => (
  <form className={styles.form} onSubmit={onAddToCart}>
    <OptionSize
      sizes={sizes}
      currentSize={currentSize}
      setCurrentSize={setCurrentSize}
    />
    <OptionColor
      colors={colors}
      currentColor={currentColor}
      setCurrentColor={setCurrentColor}
    />
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
      Add to Cart
    </Button>
  </form>
);

ProductForm.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired
  })).isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;

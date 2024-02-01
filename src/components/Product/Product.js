import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);


  const price = useMemo(() => {
    const sizePrice = sizes.find(size => size.name === currentSize).additionalPrice;
    return basePrice + sizePrice;
  }, [currentSize, basePrice, sizes]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log('Adding to cart:');
    console.log(`Product: ${title}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
    console.log(`Price: ${price}$`);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          colors={colors}
          sizes={sizes}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          onAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  })).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;

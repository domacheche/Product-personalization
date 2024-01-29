import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => (
  <ul className={styles.choices}>
    {colors.map(color => (
      <li key={color}>
        <button
          type="button"
          className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], color === currentColor && styles.active)}
          onClick={() => setCurrentColor(color)}
        />
      </li>
    ))}
  </ul>
);

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;

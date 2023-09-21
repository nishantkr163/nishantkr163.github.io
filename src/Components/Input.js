import React from 'react';
import styles from './Input.module.css';

const Input = ({innerText, type}) => {
  return (
    <div className={styles.form__group}>
      <input
        type={type}
        className={styles.form__field}
        placeholder="Email"
        required=""
      />
      <label htmlFor="Email" className={styles.form__label}>
        {innerText}
      </label>
    </div>
  );
};

export default Input;
import React from 'react';
import styles from './Input.module.css';

const Input = ({innerText, type, name, value, handleInput}) => {
  return (
    <div className={styles.form__group}>
      <input
        onChange={(e) => handleInput(e)}
        value={value}
        name={name}
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
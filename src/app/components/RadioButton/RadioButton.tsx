import React from 'react';
import styles from './RadioButton.module.css';

type RadioButtonProps = {
  label: string;
  type: string;
  value: string;
  name: string;
  className?: string;
};

export default function Filter({
  label,
  type,
  value,
  name,
}: RadioButtonProps): JSX.Element {
  return (
    <label className={styles.radio}>
      <input
        className={styles.radio__input}
        type={type}
        value={value}
        name={name}
      />
      <div className={styles.radio__button}>
        <span className={styles.radio__label}>{label}</span>
      </div>
    </label>
  );
}

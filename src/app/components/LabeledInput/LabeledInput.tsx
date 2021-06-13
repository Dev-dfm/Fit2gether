import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  variant?: 'primary' | 'secondary';
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function LabeledInput({
  variant,
  label,
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={
          variant
            ? `${styles[`container__input--${variant}`]} ${
                styles.container__input
              }`
            : styles.container__input
        }
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      <span
        className={
          variant
            ? `${styles[`container__placeholder--${variant}`]} ${
                styles.container__placeholder
              }`
            : styles.container__placeholder
        }
      >
        {label}
      </span>
    </label>
  );
}

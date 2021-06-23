import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  label: string;
  placeholder: string;
  value: string | number;
  type?: string;
  required?: boolean;
  min?: number;
  onChange: (value: string) => void;
};

export default function LabeledInput({
  variant,
  label,
  placeholder,
  value,
  type,
  required,
  min,
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
        min={min}
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

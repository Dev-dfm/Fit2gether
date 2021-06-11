import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function LabeledInput({
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className={styles.container__placeholder}>{placeholder}</span>
    </label>
  );
}

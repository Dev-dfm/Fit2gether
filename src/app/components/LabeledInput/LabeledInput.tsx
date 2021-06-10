import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function LabeledInput({
  label,
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <div className={styles.form}>
      <input
        id="form__input"
        className={styles.form__input}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor="form_input" className={styles.form__label}>
        {' '}
        {label}{' '}
      </label>
    </div>
  );
}

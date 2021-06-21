import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export default function Button({
  children,
  variant,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button}`
          : styles.button
      }
    >
      {children}
    </button>
  );
}

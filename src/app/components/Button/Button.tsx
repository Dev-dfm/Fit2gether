import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant,
  onClick,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button}`
          : styles.button
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

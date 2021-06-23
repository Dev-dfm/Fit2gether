import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
};

export default function Button({
  children,
  variant,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button}`
          : styles.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

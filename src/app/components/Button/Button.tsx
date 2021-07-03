import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  variant,
  onClick,
  disabled,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button} ${className}`
          : `${styles.button} ${className}`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}

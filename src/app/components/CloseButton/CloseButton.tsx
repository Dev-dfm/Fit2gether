import React from 'react';
import styles from './CloseButton.module.css';
import CloseIcon from '../Icons/CloseIcon';

type CloseButtonProps = {
  className?: string;
  onClick: () => void;
};

export default function CloseButton({
  onClick,
  className,
}: CloseButtonProps): JSX.Element {
  return (
    <button className={`${styles.closeButton} ${className}`} onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

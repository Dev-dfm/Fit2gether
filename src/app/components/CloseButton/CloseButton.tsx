import React from 'react';
import styles from './CloseButton.module.css';
import CloseIcon from '../Icons/CloseIcon';

type CloseButtonProps = {
  onClick: () => void;
};

export default function CloseButton({
  onClick,
}: CloseButtonProps): JSX.Element {
  return (
    <button className={styles.closeButton} onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

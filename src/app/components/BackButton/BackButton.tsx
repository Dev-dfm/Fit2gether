import React from 'react';
import { useHistory } from 'react-router';
import BackbuttonIcon from '../Icons/BackButtonIcon';
import styles from './BackButton.module.css';

export type BackButtonProps = {
  className?: string;
};

export default function BackButton({
  className,
}: BackButtonProps): JSX.Element {
  const history = useHistory();
  return (
    <button
      className={`${styles.backButton} ${className}`}
      onClick={() => history.goBack()}
    >
      <BackbuttonIcon />
    </button>
  );
}

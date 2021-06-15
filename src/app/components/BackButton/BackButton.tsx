import React from 'react';
import { useHistory } from 'react-router';
import BackbuttonIcon from '../Icons/BackButtonIcon';
import styles from './BackButton.module.css';

export default function BackButton(): JSX.Element {
  const history = useHistory();
  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <BackbuttonIcon />
    </button>
  );
}

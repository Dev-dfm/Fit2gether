import React from 'react';
import { useHistory } from 'react-router';
import styles from './BackButton.module.css';

type BackProps = {
  icon: React.SVGProps<SVGSVGElement>;
};

export default function BackButton({ icon }: BackProps): JSX.Element {
  const history = useHistory();
  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      {icon}
    </button>
  );
}

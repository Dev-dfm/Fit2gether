import React from 'react';
import { useLocation } from 'react-router-dom';
import useGroupDetails from '../../hooks/useGroupDetails';
import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import BoxingIcon from '../Icons/BoxingIcon';
import Schedule from '../Schedule/Schedule';
import styles from './Modal.module.css';

type ModalProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export default function Modal({ className, onClose }: ModalProps): JSX.Element {
  const query = new URLSearchParams(useLocation().search);
  const groupname = query.get('groupname');
  const { groupDetails, isLoading, errorMessage } = useGroupDetails(groupname);

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!groupDetails) {
    return <div>Group not found</div>;
  }

  return (
    <div className={className}>
      <div className={styles.card}>
        <header className={styles.header}>
          <CloseButton className={styles.closeButton} onClick={onClose} />
          <Button className={styles.joinButton} variant="tertiary">
            Join
          </Button>
        </header>
        <main className={styles.main}>
          <div className={styles.main__title}>
            <h2>{groupDetails.groupname}</h2>
            <BoxingIcon />
          </div>
          <Schedule
            month={groupDetails.month}
            date={groupDetails.date}
            location={groupDetails.location}
            time={groupDetails.time}
            distance={groupDetails.distance}
            member="07/10"
          />
          <article className={styles.main__article}>
            <h3>Description</h3>
            <p>{groupDetails.description}</p>
          </article>
          <article className={styles.main__article}>
            <h3>Equipment needed</h3>
            <p>{groupDetails.equipment}</p>
          </article>
        </main>
      </div>
    </div>
  );
}

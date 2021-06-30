import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import BoxingIcon from '../../components/Icons/BoxingIcon';
import Schedule from '../../components/Schedule/Schedule';
import Button from '../../components/Button/Button';
import styles from './GroupDetails.module.css';
import useGroupDetails from '../../hooks/useGroupDetails';

export default function GroupDetails(): JSX.Element {
  const { groupDetails, isLoading, errorMessage } = useGroupDetails();

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
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <div className={styles.joinButton}>
          <Button variant="tertiary">Join</Button>
        </div>
      </header>
      <main className={styles.groupDetails}>
        <div className={styles.groupDetails__title}>
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
        <article className={styles.groupDetails__article}>
          <h3>Description</h3>
          <p>{groupDetails.description}</p>
        </article>
        <article className={styles.groupDetails__article}>
          <h3>Equipment needed</h3>
          <ul>
            <li>{groupDetails.equipment}</li>
          </ul>
        </article>
      </main>
    </div>
  );
}

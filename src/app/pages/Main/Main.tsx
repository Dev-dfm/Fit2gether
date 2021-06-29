import React, { useState } from 'react';
import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import useGroupCards from '../../hooks/useGroupCard';

export default function Main(): JSX.Element {
  const { groupCards, isLoading, errorMessage } = useGroupCards();
  const [search, setSearch] = useState('');

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!groupCards) {
    return <div>Group not found</div>;
  }

  return (
    <div className={styles.container}>
      <header>
        <Hero search={search} setSearch={setSearch} />
      </header>
      <main className={styles.cards}>
        <div className={styles.card}>
          {groupCards
            .filter((groupCard) =>
              groupCard.groupname.match(new RegExp(search, 'ig'))
            )
            .map((groupCard) => (
              <Card
                key={groupCard.groupname}
                groupname={groupCard.groupname}
                location={groupCard.location}
                month={groupCard.month}
                date={groupCard.date}
                time={groupCard.time}
                distance={groupCard.distance}
              />
            ))}
        </div>
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

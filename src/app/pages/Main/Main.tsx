import React, { useState } from 'react';
import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import useGroupCards from '../../hooks/useGroupCard';

export default function Main(): JSX.Element {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');
  const { groupCards, isLoading, errorMessage } = useGroupCards(search, sort);

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
        <Hero search={search} setSearch={setSearch} setSort={setSort} />
      </header>
      <main className={styles.cards}>
        <div className={styles.card}>
          {groupCards.map((groupCard) => (
            <Card
              key={groupCard._id}
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
    </div>
  );
}

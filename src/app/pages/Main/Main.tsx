import React from 'react';
import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';

export default function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <Hero />
      </header>
      <main className={styles.cards}>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
        <div className={styles.card}>
          <Card
            groupTitle="Boxing"
            location="Aachener Weiher"
            month="Jan"
            date={27}
            time="18:00"
            distance={5}
          />
        </div>
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

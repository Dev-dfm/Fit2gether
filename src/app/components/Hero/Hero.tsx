import React from 'react';
import Logo from '../Icons/Logo';
import RadioButton from '../RadioButton/RadioButton';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__radioButtons}>
        <div className={styles.hero__filter}>
          <RadioButton
            className="hero__filterNear"
            label="nearest"
            type="radio"
            value=""
            name="filter"
          />
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.hero__filter}>
          <RadioButton
            className="hero__filterNew"
            label="newest"
            type="radio"
            value=""
            name="filter"
          />
        </div>
      </div>

      <SearchBar type="text" placeholder="Search for groups or sports" />
    </div>
  );
}

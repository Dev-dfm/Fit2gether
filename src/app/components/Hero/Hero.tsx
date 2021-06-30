import React from 'react';
import Logo from '../Icons/Logo';
import RadioButton from '../RadioButton/RadioButton';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.css';

type HeroSearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

export default function Hero({
  search,
  setSearch,
  setSort,
}: HeroSearchProps): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__radioButtons}>
        <div className={styles.hero__filter}>
          <RadioButton
            className="hero__filterNear"
            label="nearest"
            type="radio"
            value="distance"
            name="filter"
            onChange={() => setSort('distance')}
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
            value="date"
            name="filter"
            onChange={() => setSort('date')}
          />
        </div>
      </div>

      <SearchBar
        type="text"
        placeholder="Search for groups or sports"
        value={search}
        onChange={setSearch}
      />
    </div>
  );
}

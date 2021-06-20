import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../Icons/SearchIcon';

type SearchProps = {
  type: string;
  placeholder: string;
};

export default function SearchBar({
  type,
  placeholder,
}: SearchProps): JSX.Element {
  return (
    <label className={styles.searchBar}>
      <input
        className={styles.searchBar__input}
        type={type}
        placeholder={placeholder}
      />
      <button className={styles.searchBar__submit}>
        <SearchIcon className={styles.searchBar__icon} />
      </button>
    </label>
  );
}

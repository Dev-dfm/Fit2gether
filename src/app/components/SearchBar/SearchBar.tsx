import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../Icons/SearchIcon';

type SearchProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  type,
  placeholder,
  value,
  onChange,
}: SearchProps): JSX.Element {
  return (
    <label className={styles.searchBar}>
      <input
        className={styles.searchBar__input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.searchBar__submit}>
        <SearchIcon className={styles.searchBar__icon} />
      </button>
    </label>
  );
}

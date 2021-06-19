// SearchBar.stories.tsx
import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

export const Search = (): JSX.Element => (
  <SearchBar type="text" placeholder="Search for groups or sports" />
);

import React from 'react';
import Hero from './Hero';

export default {
  title: 'Component/Hero',
  component: Hero,
};

export const HeroContainer = (): JSX.Element => (
  <Hero search="" setSearch={console.log} setSort={console.log} />
);

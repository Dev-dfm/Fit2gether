import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Component/RadioButton',
  component: RadioButton,
};

export const Filter = (): JSX.Element => (
  <div>
    <RadioButton type="radio" value="" name="filter" label="nearest" />
    <RadioButton type="radio" value="" name="filter" label="newest" />
  </div>
);

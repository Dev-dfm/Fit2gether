import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput
    placeholder="email"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const password = (): JSX.Element => (
  <LabeledInput
    placeholder="password"
    value=""
    required={true}
    onChange={console.log}
  />
);

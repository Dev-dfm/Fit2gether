import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput label="email" placeholder="" value="" onChange={console.log} />
);

export const password = (): JSX.Element => (
  <LabeledInput
    label="password"
    placeholder=""
    value=""
    onChange={console.log}
  />
);

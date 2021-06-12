import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput
    pseudoplaceholder="email"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const password = (): JSX.Element => (
  <LabeledInput
    pseudoplaceholder="password"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

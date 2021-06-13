import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabledInput',
  component: LabeledInput,
};

export const PrimaryEmail = (): JSX.Element => (
  <LabeledInput
    variant="primary"
    label="email"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const PrimaryPassword = (): JSX.Element => (
  <LabeledInput
    variant="primary"
    label="password"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const SecondaryEmail = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="email"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const SecondaryPassword = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="password"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Username = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="username"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

export const ConfirmPassword = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="confirm password"
    placeholder=""
    value=""
    required={true}
    onChange={console.log}
  />
);

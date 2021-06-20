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
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const PrimaryPassword = (): JSX.Element => (
  <LabeledInput
    variant="primary"
    label="password"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const SecondaryEmail = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="email"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const SecondaryPassword = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="password"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Username = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="username"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const ConfirmPassword = (): JSX.Element => (
  <LabeledInput
    variant="secondary"
    label="confirm password"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const GroupName = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Group name"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Sport = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Sport"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Date = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Date"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Time = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Time"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Location = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Locartion"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const ParticipantsLimit = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Limit for participants"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Equipment = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Limit for participants"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Description = (): JSX.Element => (
  <LabeledInput
    variant="tertiary"
    label="Description"
    placeholder="&nbsp;"
    value=""
    required={true}
    onChange={console.log}
  />
);

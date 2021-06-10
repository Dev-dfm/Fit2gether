import React from 'react';
import BackButton from './BackButton';
import BackButtonIcon from '../Icons/BackButtonIcon';

export default {
  title: 'Component/BackButton',
  component: BackButton,
};

export const BackButtonComponent = (): JSX.Element => (
  <BackButton icon={<BackButtonIcon />} />
);

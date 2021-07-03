import React from 'react';
import CloseButton from './CloseButton';

export default {
  title: 'Component/CloseButton',
  component: CloseButton,
};

export const CloseButtonComponent = (): JSX.Element => (
  <CloseButton onClick={console.log} />
);

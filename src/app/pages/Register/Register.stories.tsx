import React from 'react';
import Register from './Register';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Register',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Registration = (): JSX.Element => <Register />;

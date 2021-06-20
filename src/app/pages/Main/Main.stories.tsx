import React from 'react';
import Main from './Main';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const MainPage = (): JSX.Element => <Main />;

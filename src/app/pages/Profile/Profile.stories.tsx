import React from 'react';
import Profile from './Profile';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const ProfilePage = (): JSX.Element => <Profile />;

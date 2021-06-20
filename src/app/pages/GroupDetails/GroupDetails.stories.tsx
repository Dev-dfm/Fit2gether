import React from 'react';
import GroupDetails from './GroupDetails';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/GroupeDetails',
  component: GroupDetails,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const GroupeDetailsPage = (): JSX.Element => <GroupDetails />;

import React from 'react';
import CreateGroup from './CreateGroup';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/CreateGroup',
  component: CreateGroup,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const CreateGroupPage = (): JSX.Element => <CreateGroup />;

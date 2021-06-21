import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const LoginButton = Template.bind({});
LoginButton.args = {
  variant: 'secondary',
  children: 'Login',
};

export const RegisterButton = Template.bind({});
RegisterButton.args = {
  variant: 'primary',
  children: 'Register',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  variant: 'primary',
  children: 'Reset password',
};

export const JoinButton = Template.bind({});
JoinButton.args = {
  variant: 'tertiary',
  children: 'Join',
};

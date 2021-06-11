import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const LoginButton = (): JSX.Element => (
  <Button variant="secondary">Login</Button>
);
export const RegisterButton = (): JSX.Element => (
  <Button variant="primary">Register</Button>
);
export const ResetButton = (): JSX.Element => (
  <Button variant="primary">Reset password</Button>
);

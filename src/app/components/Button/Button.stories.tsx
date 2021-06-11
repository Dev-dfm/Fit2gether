import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Login = (): JSX.Element => (
  <Button variant="secondary">Login</Button>
);
export const Register = (): JSX.Element => (
  <Button variant="primary">Register</Button>
);
export const Reset = (): JSX.Element => (
  <Button variant="primary">Reset password</Button>
);

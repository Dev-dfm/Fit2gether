import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { User } from '../../../types';
import Button from '../../components/Button/Button';
import DesginElementLogin from '../../components/DesignElement/DesginElementLogin';
import Logo from '../../components/Icons/Logo';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import { postLoginUser } from '../../utils/api';

import styles from './Login.module.css';

function Login(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = { email, password };
    if (!user) {
      throw new Error('Error');
    }
    await postLoginUser(user);
    history.push('/main');
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <span className={styles.logo__text}>
          it<span className={styles.logo__number}>2</span>gether
        </span>
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form__labeledInput}>
            <LabeledInput
              variant="primary"
              placeholder="&nbsp;"
              label="email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              variant="primary"
              placeholder="&nbsp;"
              label="password"
              type="password"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <Link to="/forgotPassword" className={styles.form__link}>
            Forgot password?
          </Link>
          <Button variant="secondary">Log in</Button>
          <Link to="/register" className={styles.form__link}>
            <span className={styles.form__linkSpan}>Not a member?</span> Sign up
          </Link>
        </form>
      </main>

      <footer className={styles.designElement}>
        <DesginElementLogin />
      </footer>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DesginElementLogin from '../../components/DesignElement/DesginElementLogin';
import Logo from '../../components/Icons/Logo';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`You entered ${email}:${password}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <header className={styles.logo}>
        <Logo />
        <span className={styles.logo__text}>
          it<span className={styles.logo__number}>2</span>gether
        </span>
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <LabeledInput
              placeholder=""
              label="email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              placeholder=""
              label="password"
              type="password"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <Link to="#" className={styles.form__link}>
            Forgot password?
          </Link>
          <Button variant="secondary">Log in</Button>
          <Link to="#" className={styles.form__link}>
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

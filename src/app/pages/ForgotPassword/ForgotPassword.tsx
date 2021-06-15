import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Logo from '../../components/Icons/Logo';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './ForgotPassword.module.css';

export default function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.passwordForm}>
      <div className={styles.overlay}></div>
      <header className={styles.passwordForm__header}>
        <BackButton />
        <div className={styles.passwordForm__logo}>
          <Logo />
        </div>
      </header>

      <main className={styles.passwordForm__main}>
        <article className={styles.passwordForm__article}>
          <h4 className={styles.passwordForm_title}>Forgot password?</h4>
          <p>
            Don't woory. Ressetting your password is easy. Just fill in your
            email and we'll send you a link to reset your password.
          </p>
        </article>
        <form className={styles.passwordForm_form}>
          <LabeledInput
            variant="secondary"
            placeholder="&nbsp;"
            label="email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
        </form>
        <div className={styles.resetButton}>
          <Button variant="primary">Reset password</Button>
        </div>
      </main>
    </div>
  );
}

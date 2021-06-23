import React, { useState } from 'react';
import styles from './Register.module.css';
import BackButton from '../../components/BackButton/BackButton';
import Logo from '../../components/Icons/Logo';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import Button from '../../components/Button/Button';
import { User } from '../../../types';
import { postUser } from '../../utils/api';
import { useHistory } from 'react-router-dom';

export default function Register(): JSX.Element {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationErrorMessage, setValidationErrorMessage] = useState<
    string | null
  >(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setValidationErrorMessage(null);
    if (password !== confirmPassword) {
      setValidationErrorMessage('Passwords did not match');
      return;
    }

    const user: User = { userName, email, password, confirmPassword };
    await postUser(user);
    history.push('/main');
  }

  return (
    <div className={styles.registerForm}>
      <div className={styles.overlay}></div>
      <header className={styles.registerForm__header}>
        <BackButton />
        <div className={styles.registerForm__logo}>
          <Logo />
        </div>
      </header>

      <main className={styles.registerForm__main}>
        <form className={styles.registerForm__form} onSubmit={handleSubmit}>
          <div>
            <LabeledInput
              variant="secondary"
              placeholder="&nbsp;"
              label="username"
              type="text"
              value={userName}
              onChange={setUserName}
              required
            />
            <LabeledInput
              variant="secondary"
              placeholder="&nbsp;"
              label="email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              variant="secondary"
              placeholder="&nbsp;"
              label="password"
              type="password"
              value={password}
              onChange={setPassword}
              required
            />
            <LabeledInput
              variant="secondary"
              placeholder="&nbsp;"
              label="confirm password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              required
            />
          </div>

          <div>
            <Button variant="primary">Register</Button>
            {validationErrorMessage && (
              <div className={styles.registerForm__error}>
                Error: {validationErrorMessage}
              </div>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

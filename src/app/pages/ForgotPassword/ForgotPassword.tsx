import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Logo from '../../components/Icons/Logo';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './ForgotPassword.module.css';

function ForgotPassword(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [isSend, setIsSend] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSend(!isSend);

    setTimeout(() => {
      history.push('/');
    }, 6000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <header className={styles.header}>
        <BackButton />
        <div className={styles.header__logo}>
          <Logo />
        </div>
      </header>

      <main className={styles.main}>
        <article>
          <h4 className={styles.main__title}>Forgot password?</h4>
          <p>
            Don't worry. Resetting your password is easy. Just fill in your
            email and we'll send you a link to reset your password.
          </p>
        </article>
        <form onSubmit={handleSubmit} className={styles.main__form}>
          <div>
            <LabeledInput
              variant="secondary"
              placeholder="&nbsp;"
              label="email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          {isSend && (
            <p>
              Your password was reseted. Please check your Email. You will be
              redirected to the login page.
            </p>
          )}
          <Button variant="primary">Reset password</Button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;

import React from 'react';
import Login from './pages/Login/Login';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
}

export default App;

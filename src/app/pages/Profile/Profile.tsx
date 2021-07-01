import React from 'react';
import styles from './Profile.module.css';

export default function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__background}>
          <div className={styles.header__profileImage}></div>
        </div>
      </div>

      <article className={styles.main}>
        <h1 className={styles.main__userName}>Hi, Jonni!</h1>
        <h2 className={styles.main_fullName}>John Doe</h2>
        <p className={styles.main__motto}>- Free to be free -</p>
        <p className={styles.main__ageTitle}>Age</p>
        <p className={styles.main__genderTitle}>Gender</p>
        <p className={styles.main__age}>24 years</p>
        <p className={styles.main__gender}>male</p>
        <p className={styles.main__aboutMeTitle}>About me</p>
        <p className={styles.main__aboutMe}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          illum dignissimos! Esse ipsam cumque fugiat inventore dicta labore
          ipsum doloribus.
        </p>
      </article>
    </div>
  );
}

import React from 'react';
import styles from './Card.module.css';
import Boxing from '../Icons/BoxingIcon';
import ClockIcon from '../Icons/ClockIcon';
import DistanceIcon from '../Icons/DistanceIcon';

type CardProps = {
  groupTitle: string;
  location: string;
  month: string;
  date: number;
  time: string;
  distance: number;
};

export default function Card({
  groupTitle,
  location,
  month,
  date,
  time,
  distance,
}: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.imageFrame}>
        <div className={styles.image}></div>
      </div>

      <article className={styles.card__article}>
        <section className={styles.card__header}>
          <div className={styles.card__title}>
            <h2>{groupTitle}</h2>
            <p>{location}</p>
          </div>
          <div className={styles.icon}>
            <Boxing />
          </div>
        </section>
        <section className={styles.card__footer}>
          <div className={styles.card__infoIcon}>
            <span>{month}</span>
            <span className={styles.card__infoIcon_date}>{date}</span>
          </div>
          <div className={styles.card__infoIcon}>
            <ClockIcon />
            <span className={styles.card__infoIcon_timeDist}>{time}</span>
          </div>
          <div className={styles.card__infoIcon}>
            <DistanceIcon />
            <span className={styles.card__infoIcon_timeDist}>
              {distance} km
            </span>
          </div>
        </section>
      </article>
    </div>
  );
}

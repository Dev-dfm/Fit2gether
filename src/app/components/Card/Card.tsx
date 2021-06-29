import React from 'react';
import styles from './Card.module.css';
import Boxing from '../Icons/BoxingIcon';
import ClockIcon from '../Icons/ClockIcon';
import DistanceIcon from '../Icons/DistanceIcon';
import { GroupCard } from '../../../types';
import { toFormattedDate } from '../../utils/date';
import { Link } from 'react-router-dom';

export default function Card({
  groupname,
  location,
  date,
  time,
  distance,
}: GroupCard): JSX.Element {
  const [day, month] = toFormattedDate(date);
  return (
    <Link to={`/GroupDetails?groupname=${groupname}`}>
      <div className={styles.card}>
        <div className={styles.imageFrame}>
          <div className={styles.image}></div>
        </div>

        <article className={styles.card__article}>
          <section className={styles.card__header}>
            <div className={styles.card__title}>
              <h1>{groupname}</h1>
              <p>{location}</p>
            </div>
            <div className={styles.icon}>
              <Boxing />
            </div>
          </section>
          <section className={styles.card__footer}>
            <div className={styles.card__footerInfo}>
              <span>{month}</span>
              <span className={styles.card__footerInfo_day}>{day}</span>
            </div>
            <div className={styles.card__footerInfo}>
              <ClockIcon />
              <span className={styles.card__footerInfo_timeDist}>{time}</span>
            </div>
            <div className={styles.card__footerInfo}>
              <DistanceIcon />
              <span className={styles.card__footerInfo_timeDist}>
                {distance} km
              </span>
            </div>
          </section>
        </article>
      </div>
    </Link>
  );
}

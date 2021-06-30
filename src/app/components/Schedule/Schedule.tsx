import React from 'react';
import ClockIcon from '../Icons/ClockIcon';
import DistanceIcon from '../Icons/DistanceIcon';
import MemberIcon from '../Icons/MemberIcon';
import styles from './Schedule.module.css';
import { toFormattedDate } from '../../utils/date';

type ScheduleProps = {
  month: string;
  date: string;
  location: string;
  time: string;
  distance: number;
  member: string;
};

export default function Schedule({
  date,
  location,
  time,
  distance,
  member,
}: ScheduleProps): JSX.Element {
  const [day, month] = toFormattedDate(date);
  return (
    <section className={styles.groupDetails__schedule}>
      <div className={styles.groupDetails__date}>
        <p className={styles.groupDetails__month}>{month}</p>
        <p className={styles.groupDetails__day}>{day}</p>
      </div>

      <div className={styles.groupDetails__location}>
        <p className={styles.groupDetails__locationTitle}>Location</p>
        <p>{location}</p>
      </div>

      <div className={styles.groupDetails__icon}>
        <ClockIcon />
      </div>
      <p>{time}</p>

      <div className={styles.groupDetails__icon}>
        <DistanceIcon />
      </div>
      <p>{distance} km</p>

      <MemberIcon />
      <p> {member} </p>
    </section>
  );
}

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
      <p className={styles.groupDetails__month}>{month}</p>
      <p className={styles.groupDetails__locationTitle}>Location</p>
      <p className={styles.groupDetails__day}>{day}</p>
      <p className={styles.groupDetails__location}>{location}</p>
      <ClockIcon className={styles.icon} />
      <p>{time}</p>
      <DistanceIcon className={styles.icon} />
      <p>{distance} km</p>
      <MemberIcon />
      <p> {member} </p>
    </section>
  );
}

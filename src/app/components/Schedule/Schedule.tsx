import React from 'react';
import styles from './Schedule.module.css';

type ScheduleProps = {
  month: string;
  date: number;
  locationTitle: string;
  location: string;
  clockIcon: React.SVGProps<SVGSVGElement>;
  distanceIcon: React.SVGProps<SVGSVGElement>;
  memberIcon: React.SVGProps<SVGSVGElement>;
  time: string;
  distance: number;
  member: string;
};

export default function Schedule({
  month,
  date,
  locationTitle,
  location,
  clockIcon,
  distanceIcon,
  memberIcon,
  time,
  distance,
  member,
}: ScheduleProps): JSX.Element {
  return (
    <section className={styles.groupDetails__schedule}>
      <div className={styles.groupDetails__date}>
        <p className={styles.groupDetails__month}>{month}</p>
        <p className={styles.groupDetails__day}>{date}</p>
      </div>

      <div className={styles.groupDetails__location}>
        <p className={styles.groupDetails__locationTitle}>{locationTitle}</p>
        <p>{location}</p>
      </div>

      <div className={styles.groupDetails__icon}>{clockIcon}</div>
      <p>{time}</p>

      <div className={styles.groupDetails__icon}>{distanceIcon}</div>
      <p>{distance} km</p>

      {memberIcon}
      <p> {member} </p>
    </section>
  );
}

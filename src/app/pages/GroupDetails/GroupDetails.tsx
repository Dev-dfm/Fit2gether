import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import BoxingIcon from '../../components/Icons/BoxingIcon';
import ClockIcon from '../../components/Icons/ClockIcon';
import DistanceIcon from '../../components/Icons/DistanceIcon';
import MemberIcon from '../../components/Icons/MemberIcon';
import Schedule from '../../components/Schedule/Schedule';
import Button from '../../components/Button/Button';
import styles from './GroupDetails.module.css';

export default function GroupDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <div className={styles.joinButton}>
          <Button variant="tertiary">Join</Button>
        </div>
      </header>
      <main className={styles.groupDetails}>
        <div className={styles.groupDetails__title}>
          <h2>Boxing</h2>
          <BoxingIcon />
        </div>
        <Schedule
          month="Jan"
          date={27}
          locationTitle="Location"
          location="Aachener Weiher"
          clockIcon={<ClockIcon />}
          distanceIcon={<DistanceIcon />}
          memberIcon={<MemberIcon />}
          time="18:00"
          distance={5}
          member="07/10"
        />
        <article className={styles.groupDetails__article}>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            sint assumenda veniam cum dolorem debitis vel maxime magnam quos.
            Sed odio cupiditate omnis quasi laboriosam corrupti, accusamus quae
            illum! Ducimus eos necessitatibus quos dolorum ipsa rerum molestiae,
            velit vel animi, earum, dolores similique asperiores dolorem
            corporis. Excepturi et dolore beatae, veniam totam praesentium
            veritatis voluptatem officia eius deleniti animi cupiditate
            consectetur id aspernatur ab quam! Voluptas natus voluptatem
            deserunt quia asperiores maxime. Quia labore accusantium odio nisi
            maxime ex! Tempore rerum distinctio soluta nulla, dolores, maxime
            nostrum nemo sunt vero laudantium illum dolore ad iusto explicabo et
            praesentium exercitationem quisquam.
          </p>
        </article>
        <article className={styles.groupDetails__article}>
          <h3>Equipment needed</h3>
          <ul>
            <li>Boxing gloves</li>
          </ul>
        </article>
      </main>
    </div>
  );
}

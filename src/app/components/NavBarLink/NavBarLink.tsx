import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarLink.module.css';

type LinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
  link: string;
  active: boolean;
};

export default function NavBarLink({
  icon,
  text,
  link,
  active,
}: LinkProps): JSX.Element {
  return (
    <div
      className={`${styles.navBarItem} ${
        active ? styles['navBarItem--active'] : ''
      } `}
    >
      <Link className={styles.navBarItem__link} to={link}>
        {icon}
        {text}
      </Link>
    </div>
  );
}

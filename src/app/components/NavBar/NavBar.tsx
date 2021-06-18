import React from 'react';
import styles from './NavBar.module.css';
import NavBarLink from '../NavBarLink/NavBarLink';
import HomeIcon from '../Icons/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import PlusIcon from '../Icons/PlusIcon';
import SearchIcon from '../Icons/SearchIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import NavBarDrop from '../NavBarDrop/Drop';
import { useLocation } from 'react-router-dom';

const translateDrop: {
  [path: string]: number;
} = {
  '/main': -156,
  '/profile': -77,
  '/add': 0,
  '/search': 77,
  '/': 156,
};
export default function NavBar(): JSX.Element {
  const location = useLocation();
  const activePath: string = location.pathname;

  return (
    <div className={styles.navBar}>
      <NavBarLink
        active={activePath === '/main'}
        icon={<HomeIcon />}
        text="Home"
        link="/main"
      />
      <NavBarLink
        active={activePath === '/profile'}
        icon={<ProfileIcon />}
        text="Profile"
        link="/profile"
      />

      <NavBarLink
        active={activePath === '/add'}
        icon={<PlusIcon />}
        text="Add"
        link="/add"
      />

      <NavBarLink
        active={activePath === '/search'}
        icon={<SearchIcon />}
        text="Search"
        link="/search"
      />
      <NavBarLink
        active={activePath === '/'}
        icon={<LogoutIcon />}
        text="Logout"
        link="/"
      />

      <div
        className={styles.drop}
        style={{
          transform: `translateX(${translateDrop[activePath]}%)`,
        }}
      >
        <NavBarDrop />
      </div>
    </div>
  );
}

import React from 'react';
import NavBarLink from './NavBarLink';
import HomeIcon from '../Icons/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import PlusIcon from '../Icons/PlusIcon';
import SearchIcon from '../Icons/SearchIcon';
import LogoutIcon from '../Icons/LogoutIcon';

export default {
  title: 'Component/NavBarLink',
  component: NavBarLink,
};

export const Home = (): JSX.Element => (
  <NavBarLink active={false} icon={<HomeIcon />} text="Home" link="/main" />
);
export const Profile = (): JSX.Element => (
  <NavBarLink
    active={false}
    icon={<ProfileIcon />}
    text="Profile"
    link="/profile"
  />
);
export const AddGroup = (): JSX.Element => (
  <NavBarLink active={false} icon={<PlusIcon />} text="Add" link="/add" />
);
export const Search = (): JSX.Element => (
  <NavBarLink
    active={false}
    icon={<SearchIcon />}
    text="Search"
    link="/search"
  />
);
export const Logout = (): JSX.Element => (
  <NavBarLink active={false} icon={<LogoutIcon />} text="Logout" link="/" />
);

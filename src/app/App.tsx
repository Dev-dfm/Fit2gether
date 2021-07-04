import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import Login from './pages/Login/Login';
import styles from './App.module.css';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Main from './pages/Main/Main';
import CreateGroup from './pages/CreateGroup/CreateGroup';
import Profile from './pages/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Login, exact: true },
  { path: '/register', Component: Register },
  { path: '/forgotPassword', Component: ForgotPassword },
  { path: '/main', Component: Main },
  { path: '/createGroup', Component: CreateGroup },
  { path: '/profile', Component: Profile },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
        <Route path={['/main', '/createGroup', '/profile']}>
          <NavBar className={styles.navbar} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

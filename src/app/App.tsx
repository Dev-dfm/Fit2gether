import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import Login from './pages/Login/Login';
import styles from './App.module.css';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Login, exact: true },
  { path: '/register', Component: Register },
  { path: '/forgotPassword', Component: ForgotPassword },
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
      </BrowserRouter>
    </div>
  );
}

export default App;

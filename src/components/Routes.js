import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Troubles from './pages/Troubles';
import Shoot from './pages/Shoot';
import HeaderBumper from './common/HeaderBumper';
import Jump from './pages/Jump';
import styles from './Routes.module.scss';

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <HeaderBumper />
        <Switch>
          <Route path="/beginner/:id">
            <Jump />
          </Route>
          <Route path="/beginner">
            <Beginner />
          </Route>
          <Route path="/troubles/:id">
            <Shoot />
          </Route>
          <Route path="/troubles">
            <Troubles />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
export default Routes;
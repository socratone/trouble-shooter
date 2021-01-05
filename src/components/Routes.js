import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import HeaderBumper from './common/HeaderBumper';
import styles from './Routes.module.scss';

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <HeaderBumper />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
export default Routes;
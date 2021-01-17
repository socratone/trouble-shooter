import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import Troubles from './pages/Troubles';
import Shoot from './pages/Shoot';
import HeaderBumper from './common/HeaderBumper';
import TroublesEditor from './pages/TroublesEditor';
import Admin from './pages/Admin';
import styles from './Routes.module.scss';

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <HeaderBumper />
        <Switch>
          <Route path="/beginner/:id">
            <Shoot page="beginner" />
          </Route>
          <Route path="/beginner">
            <Troubles />
          </Route>
          <Route path="/troubles/:id">
            <Shoot page="troubles" />
          </Route>
          <Route path="/troubles">
            <Troubles />
          </Route>
          <Route path="/editor/:id">
            <TroublesEditor />
          </Route>
          <Route path="/editor">
            <TroublesEditor />
          </Route>
          <Route path="/admin">
            <Admin />
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
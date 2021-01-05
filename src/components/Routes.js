import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setTroublesItems } from '../store/reducers/troublesItems';
import Nav from './nav/Nav';
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Troubles from './pages/Troubles';
import Shoot from './pages/Shoot';
import HeaderBumper from './common/HeaderBumper';
import styles from './Routes.module.scss';

import { troublesItems } from '../fakeData';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTroublesItems(troublesItems));
  }, []);

  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <HeaderBumper />
        <Switch>
          <Route path="/beginner">
            <Beginner />
          </Route>
          <Route path="/troubles">
            <Troubles />
          </Route>
          <Route path="/shoot/:id">
            <Shoot />
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
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAdmin } from '../store/reducers/user';
import getUserByToken from '../helper/getUserByToken';
import Nav from './nav/Nav';
import Home from './pages/Home';
import Troubles from './pages/Troubles';
import Beginner from './pages/Beginner';
import Algorithm from './pages/Algorithm';
import Shoot from './pages/Shoot';
import HeaderBumper from './common/HeaderBumper';
import Editor from './pages/Editor';
import Admin from './pages/Admin';
import styles from './Routes.module.scss';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getUserByToken(localStorage.getItem('token'));
    if (user.account === 'admin') dispatch(setAdmin({ isAdmin: true }));
  }, []);

  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <HeaderBumper />
        <Switch>
          <Route path="/algorithm/:id">
            <Shoot page="algorithm" />
          </Route>
          <Route path="/algorithm">
            <Algorithm />
          </Route>
          <Route path="/beginner/:id">
            <Shoot page="beginner" />
          </Route>
          <Route path="/beginner">
            <Beginner />
          </Route>
          <Route path="/troubles/:id">
            <Shoot page="troubles" />
          </Route>
          <Route path="/troubles">
            <Troubles />
          </Route>
          <Route path="/editor/:id">
            <Editor />
          </Route>
          <Route path="/editor">
            <Editor />
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
import React, { useEffect, useState } from 'react';
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
import About from './pages/About';
import Beginner from './pages/Beginner';
import Algorithm from './pages/Algorithm';
import Shoot from './pages/Shoot';
import Editor from './pages/Editor';
import Admin from './pages/Admin';
import styles from './Routes.module.scss';

const HEADER_HEIGHT = 50;

const Routes = () => {
  const [height, setHeight] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getUserByToken(localStorage.getItem('token'));
    if (user.account === 'admin') dispatch(setAdmin({ isAdmin: true }));
  }, []);

  window.onresize = () => {
    setHeight(setMainHeight());
  };

  useEffect(() => {
    setHeight(setMainHeight());
  }, []);

  const setMainHeight = () => {
    return window.innerHeight - HEADER_HEIGHT + 'px';
  };

  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap} style={{ height }}>
        <Switch>
          <Route path="/algorithm/:id">
            <Shoot />
          </Route>
          <Route path="/algorithm">
            <Algorithm />
          </Route>
          <Route path="/beginner/:id">
            <Shoot />
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
          <Route path="/portfolio">
            <About />
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
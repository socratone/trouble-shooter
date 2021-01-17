import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAdmin } from '../../store/reducers/user';
import { postSignin } from '../../api/admin';
import getUserByToken from '../../helper/getUserByToken';
import NormalPageFrame from '../common/NormalPageFrame';
import styles from './Admin.module.scss';

const Admin = () => {
  const [password, setPassword] = useState('');
  const input = useRef(null);
  const user = useSelector(state => state.entities.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [input]);

  const handleInputChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleInputKeyDown = ({ key }) => {
    if (key === 'Enter') handleSigninButton();
  };

  const handleSigninButton = async () => {
    const result = await postSignin(password);
    setPassword('');
    if (result.error) return alert(result.error.message);
    localStorage.setItem('token', result.token);
    const user = getUserByToken(localStorage.getItem('token'));
    if (user.account === 'admin') dispatch(setAdmin({ isAdmin: true }));
    history.goBack();
  };

  const handleSignoutButton = async () => {
    localStorage.setItem('token', '');
    dispatch(setAdmin({ isAdmin: false }));
  };

  return (  
    <NormalPageFrame>
      <main className={styles.main}>
        {user.isAdmin && <p className={styles.message}>admin 인증이 됐습니다.</p>}
        {!user.isAdmin && <p className={styles.message}>admin 인증이 필요합니다.</p>}
        <input
          ref={input}
          type="text" 
          placeholder="암호"
          value={password} 
          onChange={handleInputChange} 
          onKeyDown={handleInputKeyDown}
          className={styles.input}/>
        <button onClick={handleSigninButton} className={styles.button}>
          Signin
        </button>
        {user.isAdmin && <button 
          onClick={handleSignoutButton} 
          className={styles.button}>
            Signout
        </button>}
      </main>
    </NormalPageFrame>
  );
}
 
export default Admin;
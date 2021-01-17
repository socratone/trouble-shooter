import React, { useState } from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import styles from './Admin.module.scss';

const Admin = () => {
  const [password, setPassword] = useState('');

  const handleInputChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSigninButton = () => {
    // TODO: post request
  };

  return (  
    <NormalPageFrame>
      <main className={styles.main}>
        <input 
          type="text" 
          value={password} 
          onChange={handleInputChange} 
          className={styles.input}/>
        <button onChange={handleSigninButton} className={styles.button}>
          Signin
        </button>
      </main>
    </NormalPageFrame>
  );
}
 
export default Admin;
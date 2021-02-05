import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteItem } from '../../api/item';
import NormalPageFrame from '../common/NormalPageFrame';
import styles from './Admin.module.scss';

const Delete = () => {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const input = useRef(null);
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
    const result = await deleteItem(id, password);
    setPassword('');
    if (result.error) return alert(result.error.message);
    history.goBack();
  };

  return (  
    <NormalPageFrame>
      <main className={styles.main}>
        <p className={styles.message}>삭제하려면 암호를 입력해주세요.</p>
        <input
          ref={input}
          type="password" 
          placeholder="암호"
          value={password} 
          onChange={handleInputChange} 
          onKeyDown={handleInputKeyDown}
          className={styles.input}/>
        <button onClick={handleSigninButton} className={styles.button}>
          Delete
        </button>
      </main>
    </NormalPageFrame>
  );
}
 
export default Delete;
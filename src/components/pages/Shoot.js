import React from 'react';
import { useParams } from 'react-router-dom';
import BookPageFrame from '../common/BookPageFrame';
import styles from './Shoot.module.scss';

const Shoot = () => {
  const { id } = useParams();

  return (  
    <BookPageFrame>
      <main>
        {id}
      </main>
    </BookPageFrame>
  );
}
 
export default Shoot;
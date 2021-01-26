import React from 'react';
import styles from './Company.module.scss';
import styled from 'styled-components';

const Text = styled.p`
  margin-bottom: 10px;
  color: #c0c0c0;
`;

const Company = ({ image, name, children }) => {
  return (  
    <article className={styles.company}>
      <img 
        src={image} 
        alt={name}
        className={styles.image}
        width="100"/>
      <h4 className={styles.name}>{name}</h4>
      {children.map((text, i) => <Text key={i}>{text}</Text>)}
    </article>
  );
}
 
export default Company;
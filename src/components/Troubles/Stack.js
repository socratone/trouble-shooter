import React from 'react';
import styles from './Stack.module.scss';

const Stack = ({ item }) => {
  if (!item.thumbnail) return null;
  if (item.category === 'js') {
    return <img 
      src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg" 
      alt={item.category}
      className={styles.image} />
  } else if (item.category === 'html') {
    return <img 
      src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg" 
      alt={item.category}
      className={styles.image} />
  } else if (item.category === 'css') {
    return <img 
      src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg" 
      alt={item.category}
      className={styles.image} />
  }
  return null;
}
 
export default Stack;
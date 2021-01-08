import React from 'react';
import styles from './Stack.module.scss';

const Stack = ({ item, margin }) => {
  if (!item.thumbnail) return null;

  const setSrc = () => {
    if (item.category === 'js') {
      return "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg";
    } else if (item.category === 'html') {
      return "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg";
    } else if (item.category === 'css') {
      return "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg";
    } else {
      return "https://cdn.iconscout.com/icon/free/png-512/aws-1-282741.png"
    }
  };

  return (
    <img 
      src={setSrc()} 
      alt={item.category}
      style={{ margin }}
      className={styles.image} 
    />
  )
}
 
export default Stack;
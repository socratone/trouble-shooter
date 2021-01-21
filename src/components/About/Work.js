import React from 'react';
import styles from './Work.module.scss';

const Work = ({ first, even, subTitle, title, description, image }) => {
  const setOrder = () => {
    if (even) return { order: '2' };
    return {};
  };

  const setBackgroundColor = () => {
    if (!even) return { backgroundColor: 'whitesmoke' };
    return {};
  };

  const setPadding = () => {
    if (first) return { paddingTop: '25px' }
    return {};
  }

  return (  
    <article className={styles.itemWrap} style={setBackgroundColor()}>
      <div className={styles.item} style={setPadding()}>
        <div className={styles.imageArea} style={setOrder()}>
          <img src={image} alt={title} className={styles.image}/>
        </div>
        <div>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.title}>{title}</p>
          <div className={styles.description}>{description}</div>
          <button>VIEW DETAIL</button>
        </div>
      </div>
    </article>
  );
}
 
 
export default Work;
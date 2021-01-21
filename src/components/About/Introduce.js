import React from 'react';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (  
    <section>
      <section className={styles.introduce}>
        <h2 className={styles.title}>안녕하세요! Front-end 개발자 김기원입니다.</h2>
        <p className={styles.text}>콘텐츠 만드는 일을 좋아해 글쓰기부터 작곡까지 다양한 일을 했습니다. 이러한 경험을 바탕으로 디자인에 대한 감각이 있고 콘텐츠를 보여주는 웹 페이지를 어떻게 구성하면 좋을지 쉽게 파악할 수 있습니다.</p>
      </section>
    </section>
  );
}
 
export default Introduce;
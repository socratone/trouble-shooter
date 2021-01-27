import React from 'react';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (  
    <section>
      <section className={styles.introduce}>
        <h2 className={styles.title}>
          <span>안녕하세요!</span>
          <span>개발자 김기원입니다.</span>
          <span>방문해주셔서 감사합니다.</span>
        </h2>
        <p className={styles.text}>
          저는 모션 그래픽을 이용한 유튜브 영상, 작곡 등 다양한 콘텐츠를 만들었던 경험이 있습니다.
          때문에 사용자에게 어필 가능한 웹 콘텐츠를 제공할 수 있습니다.
          또한 기본을 중요시해서 자바스크립트에 대한 이해도가 높고
          라이브러리 없이 CSS만으로도 원하는 디자인을 자아낼 수 있습니다.
          기록하는 습관 덕에 이전에 정리했던 내용을 참고하여,
          개발하면서 발생하는 문제들을 보다 빠르고 정확히 해결하고 있습니다.
        </p>
      </section>
    </section>
  );
}
 
export default Introduce;
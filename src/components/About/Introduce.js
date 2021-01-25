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
          저는 대중음악 작곡, 모션 그래픽을 이용한 영상, 블로그 등 다양한 콘텐츠를 만들었던 경험이 있습니다. 
          이를 바탕으로 특정 사이트에 접속한 사용자가 무엇을 바라는지 쉽게 파악하고
          사용자에게 더 나은 UI와 UX를 제공할 수 있습니다.
          또한 정리하는 습관 때문에 문제를 해결하면서 알게 된 새로운 정보들을 블로그에 기록하고
          한 번 해결했던 문제가 다시 나왔을 때 빠르고 정확하게 처리합니다.
        </p>
      </section>
    </section>
  );
}
 
export default Introduce;
import React from 'react';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (  
    <section>
      <section className={styles.introduce}>
        <h2 className={styles.title}>
          <span>안녕하세요!</span>
          <span>Front-end 개발자</span>
          <span>김기원이라고 합니다.</span>
        </h2>
        <p className={styles.text}>
          저는 읽기 쉬운 코드를 작성하여 다른 팀원의 작업 능률을 높일 수 있습니다.
          자바스크립트와 같은 기본 원리를 중요시하고
          CSS에 대한 이해가 깊어 디자이너가 원하는 레이아웃을 정확히 그려냅니다.
          대중음악과 유튜브 영상 콘텐츠 제작 경험을 바탕으로
          사용자에게 편안한 UI와 UX를 제공할 수 있습니다.
          직관적인 코드와 디자인 센스로 함께 일하게 될 분들에게 큰 도움이 되기를 기대합니다.
        </p>
      </section>
    </section>
  );
}
 
export default Introduce;
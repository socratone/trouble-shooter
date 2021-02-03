import React, { useState } from 'react';
import AppleIcon from '../icon/AppleIcon';
import Dropdown from '../common/Dropdown';
import styles from './WorkItem.module.scss';

const WorkItem = ({ 
  head, even, subTitle, title, term, description, image, link, mac, children, clicked
}) => {
  const [isViewDetail, setViewDetail] = useState(clicked ? true : false);

  const handleViewDetail = () => {
    if (isViewDetail) setViewDetail(false);
    else setViewDetail(true);
  };

  const setOrder = () => {
    if (even) return { order: '1' };
    return {};
  };

  const setBackgroundColor = () => {
    if (!even) return { backgroundColor: 'whitesmoke' };
    return {};
  };

  const setPadding = () => {
    if (head) return { paddingTop: '25px' }
    return {};
  };

  const setBoxShadow = () => {
    if (isViewDetail) return '#fdc073 0px 7px 29px 0px';
  };

  return (  
    <>
      <article className={styles.itemWrap} style={setBackgroundColor()}>
        <div className={styles.item} style={setPadding()}>
          <div className={styles.imageArea} style={setOrder()}>
            <img src={image} alt={title} className={styles.image}/>
          </div>
          <div>
            <p className={styles.subTitle}>{subTitle}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.term}>{term}</p>
            <div className={styles.description}>{description}</div>
            <button 
              className={styles.firstButton}
              style={{ boxShadow: setBoxShadow() }}
              onClick={handleViewDetail}>
                <p>{isViewDetail ? '접기' : '펼치기'}</p>
            </button>
            {link && <a 
              className={styles.secondButton}
              href={link}
              rel="noreferrer"
              target="_blank">
                <div>
                  <p>홈페이지</p>
                </div>
            </a>}
            {mac && <div className={styles.buttonWrap}>
              <a 
                className={styles.secondButton}
                href={mac}
                download>
                  <div>
                    <p className={styles.icon}><AppleIcon size="16" /></p>
                    <p className={styles.marginText}>다운로드</p>
                  </div>
              </a>
              <div className={styles.buttonHider}>
                <Dropdown top="60px">
                  <li>맥에서만 실행할 수 있습니다.</li>
                  <li>시스템 환경설정의 보안 및 개인 정보 보호에서</li>
                  <li>앱 실행 제한을 해제할 수 있습니다.</li>
                </Dropdown>
              </div>
            </div>}
          </div>
        </div>
      </article>
      <article className={styles.itemWrap} style={setBackgroundColor()}>
        {isViewDetail && <div className={styles.detail}>
          {children}
        </div>}
      </article>
    </>
  );
}
 
 
export default WorkItem;
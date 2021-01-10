import React from 'react';
import styled from 'styled-components';
import SynchroIcon from '../icon/SynchroIcon';

const Wrap = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
`;

const SynchroIndicator = ({ size }) => {
  return (  
    <Wrap>
      <Indicator>
        <SynchroIcon size={size} />
      </Indicator>
    </Wrap>
  );
}

export default SynchroIndicator;
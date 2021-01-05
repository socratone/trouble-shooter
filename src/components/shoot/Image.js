import React from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Img = styled.img`
  display: block;

  @media (max-width: 600px) {
    width: 100% !important;
  }
`;

const Image = ({ src, width, align = 'left' }) => {
  let justifyContent = 'flex-start';
  if (align === 'center') justifyContent = 'center';
  else if (align === 'right') justifyContent = 'flex-end';

  return (  
    <Wrap style={{ justifyContent }}>
      <Img src={src} alt="" style={{ width }} />
    </Wrap>
  );
}
 
export default Image;
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin: 16px 0;
  justify-content: center;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  border: 1px solid whitesmoke;
`;

const s3URL = process.env.REACT_APP_S3_URL;

const Image = ({ url, width }) => {
  return (  
    <Wrap>
      <Img src={s3URL + '/' + url} alt={url} style={{ maxWidth: width }} />
    </Wrap>
  );
}
 
export default Image;
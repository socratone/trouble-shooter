import React from 'react';
import convertTextToJSX from '../../helper/convertTextToJSX';
import styled from 'styled-components';

const Wrap = styled.div`
  padding: 16px 20px;
  background-color: #282c34; 
  color: white;
  border-radius: 10px;
  margin: 10px 0;
`;

const Code = ({ children }) => {
  return (  
    <Wrap>{convertTextToJSX(children)}</Wrap>
  );
}
 
export default Code;
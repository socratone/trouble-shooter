import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  padding: 16px 20px;
  background-color: #282c34; 
  color: white;
  border-radius: 10px;
  margin: 10px 0;
  overflow: auto;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  line-height: 20px;
`;

const Code = ({ children }) => {
  return (  
    <Pre>{children}</Pre>
  );
}
 
export default Code;
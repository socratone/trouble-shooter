import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
  fill: var(--code-header-font-color);
`;

const CopyIcon = ({ size }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <Path 
      d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
    />
  </svg>
);

export default CopyIcon;
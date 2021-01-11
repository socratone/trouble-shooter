import React from 'react';

const FullScreenIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path 
      style={{ fill: color }} 
      d="M24,24H0V0h24V24z M23,1H1v22h22V1z M19,10h-1V6.8L6.8,18H10v1H5v-5h1v3.2L17.2,6H14V5h5C19,5,19,10,19,10z"
    />
  </svg>
);

export default FullScreenIcon;
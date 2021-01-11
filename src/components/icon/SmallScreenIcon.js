import React from 'react';

const SmallScreenIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path 
      style={{ fill: color }} 
      d="M24,24H0V0h24V24z M1,13v10h10.5V13H1z M23,23V1H1v11h11.5v11H23z M19,10h-5V5h1v3.2L20.2,3L21,3.8L15.8,9H19
	C19,9,19,10,19,10z"
    />
  </svg>
);

export default SmallScreenIcon;
import React from 'react';

const LinkArrowIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    style={{ transform: 'rotate(-45deg)' }}
  >
    <path 
      style={{ fill: color }} 
      d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
    />
  </svg>
);

export default LinkArrowIcon;
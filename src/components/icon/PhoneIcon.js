import React from 'react';

const PhoneIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path 
      style={{ fill: color }} 
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M16.2,20.2C11,22.6,2.9,6.9,8,4.2l1.5-0.7l2.5,4.8l-1.5,0.7c-1.5,0.8,1.7,7.1,3.3,6.4c0.1,0,1.5-0.7,1.5-0.7l2.5,4.8C17.7,19.5,16.3,20.2,16.2,20.2z"
    />
  </svg>
);

export default PhoneIcon;
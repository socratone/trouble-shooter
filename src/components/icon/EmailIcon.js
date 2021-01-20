import React from 'react';

const EmailIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path 
      style={{ fill: color }} 
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M18.9,6.8L12,12.4L5.1,6.8H18.9z M18.9,17.2H5.1V8.3l6.9,5.6l6.9-5.6V17.2z"
    />
  </svg>
);

export default EmailIcon;
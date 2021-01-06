import React from 'react';

const ResizeIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path style={{ fill: color }} d="M11.7,24V0h0.7v24H11.7z"/>
    <path style={{ fill: color }} d="M13.7,24V0h0.7v24H13.7z"/>
    <path style={{ fill: color }} d="M9.7,24V0h0.7v24H9.7z"/>
  </svg>
);

export default ResizeIcon;
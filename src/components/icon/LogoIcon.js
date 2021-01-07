import React from 'react';

const LogoIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 64 64"
    fillRule="evenodd" 
    clipRule="evenodd"
    fill={color}
  >
    <path className="cls-1" d="M32,3A29,29,0,1,1,3,32,29,29,0,0,1,32,3m0-3A32,32,0,1,0,64,32,32,32,0,0,0,32,0Z"/>
    <path className="cls-1" d="M58.69,14.35A32.15,32.15,0,0,0,46.56,3.51L0,31.43c0,.19,0,.38,0,.57A31.85,31.85,0,0,0,7.45,52.52l15-11.17v21.2A32,32,0,0,0,32,64a32.44,32.44,0,0,0,6-.57L36,40.88l-.8-9.06,6.11-4.55Z"/>
    <path className="cls-2" d="M34.56,25.7a12.84,12.84,0,0,0,7.86,11.23"/>
    <path className="cls-1" d="M32,21A11,11,0,1,1,21,32,11,11,0,0,1,32,21m0-2A13,13,0,1,0,45,32,13,13,0,0,0,32,19Z"/>
  </svg>
);

export default LogoIcon;
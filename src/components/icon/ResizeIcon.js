import React from 'react';
import styled from 'styled-components';

const LineWrap = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Line = styled.div`
  width: 20%;
  background: 'back';
  background: ${props => props.color};
`;

const Margin = styled.div`
  width: 20%;
`;

const ResizeIcon = ({ width, height, color }) => (  
  <LineWrap width={width} height={height}>
    <Line color={color} />
    <Margin />
    <Line color={color} />
    <Margin />
    <Line color={color} />
  </LineWrap>
);

export default ResizeIcon;
import styled, { css } from 'styled-components';

const CircleButton = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-right: 10px;
  box-sizing: border-box;
  background-color: var(--button-color);
  border: 1px solid var(--button-border-color);
  
  ${props => props.red && css`
    background-color: var(--red-button-color);
    border: 1px solid var(--red-button-border-color);
    cursor: pointer;
  `}
    
  ${props => props.orange && css`
    background-color: var(--orange-button-color);
    border: 1px solid var(--orange-button-border-color);
    cursor: pointer;
  `}
    
  ${props => props.green && css`
    background-color: var(--green-button-color);
    border: 1px solid var(--green-button-border-color);
    cursor: pointer;
  `}
`;

export default CircleButton;
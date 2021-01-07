import styled, { css } from 'styled-components';

const Button = styled.button`
  background: #f5f5f5;
  color: #373636;
  display: inline-block;
  cursor: pointer;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 700;

  margin: ${props => props.margin};

  ${props => props.primary && css`
    background: linear-gradient(166deg, #08c 20%, #5349ff 80%);
    color: #f5f5f5;
  `}
`;

export default Button;
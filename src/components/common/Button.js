import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  color: black;
  background: #f5f5f5;
  border-radius: 3px;
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 14px;

  margin-right: ${props => props.right};

  ${props => props.primary && css`
    background: linear-gradient(166deg, #08c 20%, #5349ff 80%);
    color: #f5f5f5;
  `}
`;

export default Button;
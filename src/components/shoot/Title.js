import styled, { css } from 'styled-components';

const Title = styled.h3`
  font-size: 22px;
  line-height: 1.3;
  margin-top: 48px;
  margin-bottom: 24px;
  margin-left: 0;
  margin-right: 0;
  
  ${props => props.sub && css`
    font-size: 18px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 16px; 
  `}

  ${props => props.head && css`
    margin-top: 0;
  `}
`;

export default Title;
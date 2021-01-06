import styled, { css } from 'styled-components';

const Title = styled.h3`
  margin: 2rem 0 1rem 0;
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.3;
  
  ${props => props.head && css`
    margin: 0 0 1rem 0;
  `}
    
    ${props => props.sub && css`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 3rem 0;
  `}
`;

export default Title;
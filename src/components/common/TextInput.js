import styled from 'styled-components';

const TextInput = styled.input`
  display: inline-block;
  background: white;
  border-radius: 3px;
  border: gainsboro solid 1px;
  padding: 1rem;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;

  margin: ${props => props.margin};
  width: ${props => props.width};
`;

export default TextInput;
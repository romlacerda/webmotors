import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  width: ${(props) => (props.type === 'text' ? '100%' : '')};
`;

/* color: ${({ theme, variant }) => (variant !== undefined ? theme.input[variant].color : '')}; */

export default Input;

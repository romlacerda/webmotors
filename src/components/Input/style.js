import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  color: ${({ theme, variant }) => (variant !== undefined ? theme.inputVariant[variant].color : '')};
`;

export default Input;

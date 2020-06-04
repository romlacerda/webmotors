import styled from 'styled-components';

export const InputText = styled.input`
  height: 40px;
  padding: 0 10px;
  width: ${(props) => (props.type === 'text' ? '100%' : '')};
`;


export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 40px;
  padding: 0 10px;
`;


/* color: ${({ theme, variant }) => (variant !== undefined ? theme.input[variant].color : '')}; */

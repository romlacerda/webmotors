import styled from 'styled-components';

export const InputText = styled.input`
  height: 42px;
  padding: 0 10px;
  width: 100%;
  padding-left: ${(props) => (props.name === 'location' ? '75px' : '0')}
`;


export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 40px;
  padding: 0 10px;
`;


/* color: ${({ theme, variant }) => (variant !== undefined ? theme.input[variant].color : '')}; */

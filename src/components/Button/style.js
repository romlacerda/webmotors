import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  height: ${(props) => (props.theme.button.size[props.size] === undefined ? '40px' : props.theme.button.size[props.size])};
  width: 30%;
  outline: none;
  background-color: ${(props) => props.theme.button.variant[props.variant].backgroundColor};
  border: ${(props) => props.theme.button.variant[props.variant].border};
  color: ${(props) => props.theme.button.color[props.color]};
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: ${(props) => (props.variant === 'contained' ? '#b70a2b' : '')};
  }
`;
  /* color: ${({ theme, variant }) => (variant !== undefined ? theme.input[variant].color : '')}; */


export default Button;

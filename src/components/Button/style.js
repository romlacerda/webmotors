import styled from 'styled-components';
import device from '../../theme/device';

const Button = styled.button`
  font-weight: bold;
  height: 45px;
  width: ${(props) => (props.size === 'big' ? '30%' : '15%')};
  outline: none;
  background-color: ${(props) => props.theme.button.variant[props.variant].backgroundColor};
  border: ${(props) => props.theme.button.variant[props.variant].border};
  color: ${(props) => props.theme.button.color[props.color]};
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: ${(props) => (props.variant === 'contained' ? '#b70a2b' : '')};
  }

  @media ${device.tablet} {
    width: 100%;
    display: ${(props) => (props.sell ? 'none' : 'block')};
    margin: 2% 0;
  }


`;
  /* color: ${({ theme, variant }) => (variant !== undefined ? theme.input[variant].color : '')}; */


export default Button;

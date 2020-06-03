import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.bgColor)};
  border-color: ${(props) => props.borderColor};
  color: ${(props) => (props.color)};
  font-weight: bold;
  height: 40px;
  width: 100%;
  flex: 1;
  outline: none;
`;

export default Button;

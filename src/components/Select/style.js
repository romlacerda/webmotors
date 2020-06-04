import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  height: 45px;
  padding: ${(props) => (props.hasLabel ? '0 10px 0 70px' : '0 10px')};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray_01}
`;

export default Select;

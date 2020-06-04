import styled from 'styled-components';

const FieldGroup = styled.div`
  display: flex;
  justify-content: ${(props) => (props.content ? props.content : '')};
  margin: 1% 0;
`;

export default FieldGroup;

import styled from 'styled-components';
import device from '../../theme/device';

const FieldGroup = styled.div`
  display: flex;
  justify-content: ${(props) => (props.content ? props.content : '')};
  margin: 1% 0;

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.type === 'checkbox' ? 'row' : 'column')};
  }
`;

export default FieldGroup;

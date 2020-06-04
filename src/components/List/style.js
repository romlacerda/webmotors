import styled from 'styled-components';
import device from '../../theme/device';

const List = styled.ul`
  display: flex;
  list-style: none;
  flex: 4;
  padding: 0;
  margin-bottom: 0;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default List;

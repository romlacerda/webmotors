import styled from 'styled-components';
import device from '../../theme/device';

const Container = styled.div`
  margin: 0 5%;
  @media ${device.tablet} {
    width: 90%;
  }
`;

export default Container;

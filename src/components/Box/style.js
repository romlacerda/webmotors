import styled from 'styled-components';
import device from '../../theme/device';

const Box = styled.div`
  width: 100%;
  max-width: 933px;
  max-height: 313px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    max-height: 100%;
  }
`;

export default Box;

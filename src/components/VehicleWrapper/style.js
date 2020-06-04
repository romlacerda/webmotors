import styled from 'styled-components';
import device from '../../theme/device';

const VehicleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export default VehicleWrapper;

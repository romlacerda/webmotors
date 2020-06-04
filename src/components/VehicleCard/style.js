import styled from 'styled-components';
import device from '../../theme/device';

const VehicleCardStyle = styled.div`
  width: 100%;
  height: 200px;
  flex: 1;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin: 0 1%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

  & h4, h6 {
    margin: 0;
  }
  & div {
    margin-top: 15%;
    margin-left: 10%;
    flex-direction: column;
  }

  @media ${device.tablet} {
    margin-bottom: 10px;
  }
`;

export default VehicleCardStyle;

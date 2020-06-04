import styled from 'styled-components';
import device from '../../theme/device';

const ButtonContainer = styled.div`
  margin: 0 2.5% 1.5% 0;
  /* width: 100%; */
  display: flex;
  flex-flow: row-reverse;
 
  & button:nth-child(1) {
    margin-left: 2%;
  }

  @media ${device.tablet} {
    width: 92%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5%;

    & button:nth-child(1) {
      margin-left: 0%;
    }
  }
`;

export default ButtonContainer;

import styled from 'styled-components';
import device from '../../theme/device';

const Field = styled.div`
  display: flex;
  width: ${(props) => (props.w ? props.w : '100%')};
  margin: 0 1%;
  flex: ${(props) => (props.flex ? props.flex : '1')};
  
  & legend {
    line-height: 44px;
    margin-left: 1%;

  }

  & label {
    line-height: 44px;
    margin-left: 1%;
    position: absolute;
    font-size: 0.89em;
    color: ${(props) => props.theme.colors.gray_02}
  }

  & input, select {
    border: 1px solid #adadad;

    &:focus {
      border: 1px solid #000;
    }
  }
  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 2%;

    & label {
      margin-left: 4%;
    }
  }
  
`;

export default Field;

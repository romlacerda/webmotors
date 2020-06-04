import styled from 'styled-components';

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
`;

export default Field;

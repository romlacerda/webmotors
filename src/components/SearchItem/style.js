import styled from 'styled-components';
import device from '../../theme/device';

const SearchItem = styled.li`
  color: gray;
  width: 19%;
  border-bottom: 3px solid;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1%;
  padding-right: 2%;
  cursor: pointer;

  @media ${device.tablet} {
    width: 50%;
  }
  
  > svg {
    margin-right: 12%;
  }
  &:hover {
    color: #f2113b;
    border-bottom: 3px solid #f2113b;
  }

  &.active {
    color: #f2113b;
    border-bottom: 3px solid #f2113b;
  }
  
`;

export default SearchItem;

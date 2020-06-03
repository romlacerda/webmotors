import styled from 'styled-components';

const SearchItem = styled.li`
  color: gray;
  width: 11%;
  border-bottom: 4px solid;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1%;
  padding-right: 2%;
  cursor: pointer;

  > svg {
    margin-right: 12%;
  }
  &:hover {
    color: #f2113b;
    border-bottom: 4px solid #f2113b;
  }
`;

export default SearchItem;

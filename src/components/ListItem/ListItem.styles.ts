import styled from 'styled-components';

const StyledListItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  width: 200px;
  & input {
    margin-top: 12px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & span {
    margin-left: 10px;
  }
`;
export default StyledListItem;

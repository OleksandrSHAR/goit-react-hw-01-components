import styled from 'styled-components';

export const FrendListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  :hover {
    background-color: ${props => props.theme.colors.greu};
  }
`;

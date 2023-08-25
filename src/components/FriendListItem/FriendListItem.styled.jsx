import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  background-color: ${props => props.theme.colors.orange};
  align-items: center;
  border-radius: 10px;
  padding-left: 20px;
  gap: 15px;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.blue};
`;
export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Name = styled.p`
  font-family: 'DM Sans';
  font-weight: 700;
  color: ${props => props.theme.colors.blue};
`;

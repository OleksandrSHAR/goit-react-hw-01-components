import styled from 'styled-components';
import { RandomColor } from './RandonColor';

export const StatisticsStyle = styled.section`
  display: block;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.colors.orange};
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.blue};
`;
export const TitelStale = styled.h2`
  font-family: 'DM Sans';
  font-weight: 700;
  color: ${props => props.theme.colors.blue};
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  :first-child {
    border-bottom-left-radius: 10px;
  }
  :last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 8px;
  text-align: center;
  background-color: ${props => RandomColor(props.index)};
  color: ${props => props.theme.colors.wite};
`;

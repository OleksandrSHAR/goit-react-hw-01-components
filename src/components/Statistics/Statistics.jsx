import {
  StatisticsStyle,
  StatList,
  TitelStale,
  Item,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsStyle>
      {title && <TitelStale>{title}</TitelStale>}
      <StatList>
        {stats.map(item => (
          <Item key={item.id} id={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsStyle>
  );
};

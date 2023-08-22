import {
  StatisticsStyle,
  StatList,
  TitelStale,
  Item,
} from "./Statistics.styled"



export const Statistics = ({ stats, title }) => {
    return (
<StatisticsStyle>
 {title && <TitelStale>{title}</TitelStale>}
   <StatList>
    {stats.map((item, idx) =>
    <Item key={item.id} id={item.id} index={idx}>
    <span >{item.label}</span>
    <span >{item.percentage}%</span>
    </Item>)}      
  </StatList>
</StatisticsStyle>)
} 
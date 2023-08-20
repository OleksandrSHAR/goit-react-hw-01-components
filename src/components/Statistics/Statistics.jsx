export const Statistics = ({stats,title}) => {
    return (
<section class="statistics">
 {title && <h2 class="title">{title}</h2>}
   <ul class="stat-list">
    {stats.map((item, idx) =>
    <li class="item" key={item.id} id={item.id} index={idx}>
    <span class="label">{item.label}</span>
    <span class="percentage">{item.percentage}%</span>
    </li>)}      
  </ul>
</section>)
} 
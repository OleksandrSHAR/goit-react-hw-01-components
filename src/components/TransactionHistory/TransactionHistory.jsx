export const TransactionHistory = ({item}) => {
      return(<table class="transaction-history">
  
          <thead>
      <tr>
       <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
    {item.map((item, idx) => {
    return (
    <TableRow
    id={item.id}
    key={item.id}
    type={item.type}
    amount={item.amount}
    currency={item.currency}
    index={idx } />
        )
    })}
  </tbody>
</table>)
}

const TableRow = ({ type, amount, currency, index }) => {
    return(<tr idx={index}>
    <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
}
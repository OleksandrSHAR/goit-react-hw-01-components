import {
  TransactionHistoryStyle,
  Tr,
  Tbody,
  Td
} from "./TransactionHistory.styled"


export const TransactionHistory = ({ items }) => {
      return(<TransactionHistoryStyle>
  
          <thead>
      <Tr>
       <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </Tr>
    </thead>

    <Tbody>
    {items.map((item ) => {
    return (
    <TableRow
    id={item.id}
    key={item.id}
    type={item.type}
    amount={item.amount}
    currency={item.currency}
      />
        )
    })}
  </Tbody>
</TransactionHistoryStyle>)
}

const TableRow = ({ type, amount, currency,  }) => {
    return(<Tr  >
     
    <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>)
}
 
import PropTypes from "prop-types";

import transactions from "components/TransactionHistory/transactions.json";
import css from "components/TransactionHistory/Transactions.module.css"

const TransactionHistory = (item) => {
    
return(
<table className={css.transaction_history}>
  <thead className={css.transactions_titles}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {transactions.map(transaction => 
  <tbody key={transaction.id} className={css.transactions_items}>
  <tr>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>
</tbody>
    )
  }
</table>
)};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
    }),
    )
}
  
  export default TransactionHistory;
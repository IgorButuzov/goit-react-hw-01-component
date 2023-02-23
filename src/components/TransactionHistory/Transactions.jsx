import PropTypes from "prop-types";

import transactions from "components/TransactionHistory/transactions.json";
import css from "components/TransactionHistory/Transactions.module.css"

const TransactionHistory = (item) => {
    
return(
<table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.transactions_titles}>Type</th>
      <th className={css.transactions_titles}>Amount</th>
      <th className={css.transactions_titles}>Currency</th>
    </tr>
  </thead>
  {transactions.map(transaction => 
  <tbody key={transaction.id}>
  <tr>
    <td className={css.transactions_items}>{transaction.type}</td>
    <td className={css.transactions_items}>{transaction.amount}</td>
    <td className={css.transactions_items}>{transaction.currency}</td>
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
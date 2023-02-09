import PropTypes from "prop-types";

import transactions from "components/TransactionHistory/transactions.json";
import css from "components/TransactionHistory/Transactions.module.css"

const Transactions = items => {
    
return(
<table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
)};

Transactions.propTypes = {
    friends: PropTypes.string, 
  }
  
  export default Transactions;
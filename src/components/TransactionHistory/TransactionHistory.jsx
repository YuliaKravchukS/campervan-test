import TransactionItem from "../TransactionItem/TransactionItem"
import clsx from "clsx";
import css from "./TransactionHistory.module.css";



const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map((item) => {
            return(<tr key={item.id}>
		<TransactionItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
        />
	</tr>)
    })}
    </tbody>
</table>
)
}

export default TransactionHistory
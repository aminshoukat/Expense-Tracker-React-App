import { useContext } from 'react';
import { Context } from '../context/globalState';
const TransactionHistory = () => {

	const {transactions, deleteTransaction} = useContext(Context);

	if(!transactions.length) return null;

	return (
		<div className="mb-3">
			<h3>Transaciton History</h3>
			<ul className="list-group">
				{transactions.map((transaction, index) => 
					<li key={index} className={(Math.sign(transaction.transactionAmount) === 1) ? "list-group-item income" : "list-group-item expense" }>
						<span className="float-left">{transaction.description}</span>
						<span className="float-right">
							{ transaction.transactionAmount >= 0 ? '$'+ transaction.transactionAmount : '-$'+ (-transaction.transactionAmount) }
						</span>
						<button className="delete-history" onClick={() => deleteTransaction(transaction)}>x</button>
					</li>
				)}
			</ul>
		</div>
	);
}
 
export default TransactionHistory;
import { useContext } from 'react';
import { Context } from '../context/globalState';

const Balance = () => {

	const {transactions} = useContext(Context);
	let balance = 0;

	transactions.map(transaction => {
		balance += parseFloat(transaction.transactionAmount);
	});

	return ( 
		<div className="current-balance mb-3">
			<h4>Current Balance</h4>
			<h2>
			{ balance >= 0 ? '$'+ balance : '-$'+ (-balance) }
			</h2>
		</div>
	 );
}
 
export default Balance;
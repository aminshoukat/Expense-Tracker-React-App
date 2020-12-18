import { useContext } from 'react';
import { Context } from '../context/globalState';

const AccountSummary = () => {

	const { transactions } = useContext(Context);
	let income = 0;
	let expense = 0;

	transactions.map(transaction => {
		if(Math.sign(transaction.transactionAmount) === 1) {
			income += parseFloat(transaction.transactionAmount);
		}
		else {
			expense += parseFloat(transaction.transactionAmount);
		}
	});

	return ( 
		<div>
			<span className="d-inline-block m-4 summary-block">
				<h4>Income</h4>
				<h4><span className="currency">$</span><span>{Math.abs(income)}</span></h4>
			</span>
			<span className="d-inline-block m-4 summary-block">
				<h4>Expense</h4>
				<h4><span className="currency">$</span><span>{Math.abs(expense)}</span></h4>
			</span>
		</div>
	);
}
 
export default AccountSummary;
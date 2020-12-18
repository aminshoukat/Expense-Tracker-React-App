import { useState, useContext } from 'react';
import { Context } from './../context/globalState';
const AddTransaction = () => {

	const [description, setDescription] = useState('');
	const [transactionAmount, setTransactionAmount] = useState('');

	const {addTransaction} = useContext(Context);

	let handleTransaction = (e) => {
		e.preventDefault();
		addTransaction({description, transactionAmount});
		setDescription('');
		setTransactionAmount('');
	}

	return ( 
		<div className="mb-1">
			<h3>Add Transaction</h3>
			<form className="text-left" onSubmit={handleTransaction}>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" className="form-control" placeholder="Details of transaction" onChange={(e) => setDescription(e.currentTarget.value) } value={description} required/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Transaction Amount</label>
					<input type="number" className="form-control" placeholder="Enter transaction amount" onChange={(e) => setTransactionAmount(e.currentTarget.value) } value={transactionAmount} required/>
				</div>
				<button className="btn btn-warning w-100 add-transaction">Add Transaction</button>
			</form>

			<p className="mt-4">Made by Amin Shoukat</p>
		</div>
	);
}
 
export default AddTransaction;
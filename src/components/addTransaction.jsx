const AddTransaction = () => {
	return ( 
		<div className="mb-1">
			<h3>Add Transaction</h3>
			<form className="text-left">
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" className="form-control" placeholder="Details of transaction"/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Transaction Amount</label>
					<input type="number" className="form-control" placeholder="Enter transaction amount"/>
				</div>
				<button className="btn btn-warning w-100 add-transaction">Add Transaction</button>
			</form>
		</div>
	);
}
 
export default AddTransaction;
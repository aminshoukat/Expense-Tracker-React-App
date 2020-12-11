const AddTransaction = () => {
	return ( 
		<div className="mb-5">
			<h3>Add Transaction</h3>
			<form>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" className="form-control" value="" />
				</div>
				<div className="form-group">
					<label htmlFor="description">Transaction Amount</label>
					<input type="number" className="form-control" value="" />
				</div>
				<button className="btn btn-primary w-100">Add Transaction</button>
			</form>
		</div>
	);
}
 
export default AddTransaction;
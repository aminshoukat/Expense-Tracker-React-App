const TransactionHistory = () => {
	return ( 
		<div className="mb-3">
			<h3>Transaciton History</h3>
			<ul className="list-group">
				<li className="list-group-item">
					<span className="float-left">History 1</span>
					<span className="float-right">$100</span>
					<a href="/" className="delete-history">x</a>
				</li>
				<li className="list-group-item">
					<span className="float-left">History 1</span>
					<span className="float-right">$100</span>
					<a href="/" className="delete-history">x</a>
				</li>
				<li className="list-group-item">
					<span className="float-left">History 1</span>
					<span className="float-right">$100</span>
					<a href="/" className="delete-history">x</a>
				</li>
			</ul>
		</div>
	);
}
 
export default TransactionHistory;
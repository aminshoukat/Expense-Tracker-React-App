const AccountSummary = () => {
	return ( 
		<div>
			<span className="d-inline-block m-4">
				<h4>Income</h4>
				<h4><span className="currency">$</span><span>0.00</span></h4>
			</span>
			<span className="d-inline-block m-4">
				<h4>Expense</h4>
				<h4><span className="currency">$</span><span>0.00</span></h4>
			</span>
		</div>
	);
}
 
export default AccountSummary;
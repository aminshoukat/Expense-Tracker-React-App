const appReducer =  (state, action) => {
	switch(action.type) {
		case "DELETE_TRANSACTION":
			const transactions = [...state];
			return transactions.filter(t => t !== action.payload);

		case "ADD_TRANSACTION":
			const cloneTransactions = [...state];
			cloneTransactions.push(action.payload);
			return cloneTransactions;

		default:
			return state;
	}
}

export default appReducer;
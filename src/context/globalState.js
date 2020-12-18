import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = [
	{description: "Income 1", transactionAmount: 1000},
	{description: "Exp 1", transactionAmount: -100},
	{description: "Income 1", transactionAmount: 200},
	{description: "Exp 2", transactionAmount: -50}
];

export const Context = createContext(initialState);

export const Provider = ({children}) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteTransaction(transaction){
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: transaction
		});
	}

	function addTransaction(transaction){
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction
		});
	}

	return (
		<Context.Provider value={{transactions : state, deleteTransaction, addTransaction}}>
			{children}
		</Context.Provider>
	);
}
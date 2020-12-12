import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {
	transactions: [
		{id:1, description: "Income 1", transactionAmount: 1000},
		{id:1, description: "Exp 1", transactionAmount: -100},
		{id:1, description: "Income 1", transactionAmount: 200},
		{id:1, description: "Exp 2", transactionAmount: -50}
	]
}

const GlobalState = React.createContext();

export default GlobalState;

export const GLobalContext = ({children}) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GLobalContext.Provider value={{transactions : state.transactions}}>
			{children}
		</GLobalContext.Provider>
	);
}
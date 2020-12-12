import Header from './components/header';
import Balance from './components/balance';
import AccountSummary from './components/accountSummary';
import TransactionHistory from './components/transactionHistory';
import AddTransaction from './components/addTransaction';
import GlobalState from './context/globalState';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
	<GlobalState.Provider>
		<div className="App container">
			<Header />
			<AccountSummary />
			<Balance />
			<TransactionHistory />
			<AddTransaction />
		</div>
	</GlobalState.Provider>
  );
}

export default App;

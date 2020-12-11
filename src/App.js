import Header from './components/header';
import Balance from './components/balance';
import AccountSummary from './components/accountSummary';
import TransactionHistory from './components/transactionHistory';
import AddTransaction from './components/addTransaction';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App container">
		<Header />
		<Balance />
		<AccountSummary />
		<TransactionHistory />
		<AddTransaction />
    </div>
  );
}

export default App;

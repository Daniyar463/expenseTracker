import './App.css';
import Header from "./components/Header";
import {GlobalProvider} from "./context/GlobalState";
import IncomeExpenses  from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
      <GlobalProvider>
        <Header/>

        <div className='container'>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
      </GlobalProvider>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseExpenses from './components/ExpenseExpenses';

function App() {
  const expenses = [
    {
      id: 'ed0',
      title: 'Phone',
      amount: 1200,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'ed1',
      title: 'Car insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'ed2',
      title: 'Milk',
      amount: 10,
      date: new Date(2021, 2, 27)
    },
    {
      id: 'ed3',
      title: 'Carrot',
      amount: 1.03,
      date: new Date(2021, 1, 28)
    }];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <ExpenseExpenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;

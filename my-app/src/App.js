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

       <ExpenseExpenses expenses={expenses}/>

</div>);
}

export default App;

// import ExpenseItem from "../components/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
     title: 'Car insurance',
     amount: 23,
     date: new Date(2021, 2, 12)  
 },
 {
  title: 'Cosmetics',
  amount: 100.44,
  date: new Date(2022, 3, 12)  
},
{
  title: 'Pets',
  amount: 100.44,
  date: new Date(2021, 4, 12)  
},
 {
    title: 'Travel',
    amount: 32.23,
    date: new Date(2021, 1, 12)  
 },
{
  title: 'Apple',
  amount: 1.43,
  date: new Date(2022, 1, 17)  
}
 ];

function App() {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>
  {
    setExpenses(prevState => {
      console.log("here1 = ", [expense, ...prevState])
      return [expense, ...prevState]
    });

  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
    
  );
}

export default App;

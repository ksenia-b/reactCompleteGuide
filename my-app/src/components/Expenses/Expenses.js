import ExpenseItem from '../ExpenseItem';
import ExpensesFilter from '../Filter/ExpenseFilter';
import './Expenses.css';
import Card from '../UI/Card';


function Expenses(props){

  const addFilterHandler = year => {
    // console.log('addFilterHandler ');
    // console.log(year);
  };

        return (
          <div>
            <ExpensesFilter onAddFilter={addFilterHandler} />
            {props.items.map(expense => <ExpenseItem title={expense.title} date={expense.date} />)}

        <Card className='expenses' >       
            <ExpenseItem title={
              props.items[1].title} 
              amount={props.items[1].amount} 
               date={props.items[1].date}
            expenses={props.items[1].expenses
            }></ExpenseItem>

            <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount} 
             date={props.items[2].date}
            expenses={props.items[2].expenses
            }></ExpenseItem>  

            </Card> </div>);
}

export default Expenses;
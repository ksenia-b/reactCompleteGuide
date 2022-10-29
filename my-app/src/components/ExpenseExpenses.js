import ExpenseItem from './ExpenseItem';
import './ExpenseExpenses.css';
import Card from './Card';

function ExpenseExpenses(props){
   console.log("props here are = ", props)
        return (<Card className='expenses'>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}
            expenses={props.expenses[0].expenses}></ExpenseItem>
          <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount}  date={props.expenses[1].date}
            expenses={props.expenses[1].expenses}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount}  date={props.expenses[2].date}
            expenses={props.expenses[2].expenses}></ExpenseItem>
            </Card> );
}

export default ExpenseExpenses;
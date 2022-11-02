import ExpenseItem from '../ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props){
        return (<Card className='expenses' fdgfgdfd="fgsdfg">       
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount}  date={props.items[1].date}
            expenses={props.items[1].expenses}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount}  date={props.items[2].date}
            expenses={props.items[2].expenses}></ExpenseItem>          
            </Card> );
}

export default Expenses;
import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

function ExpenseItem(props) {
    let [title, setTitle] = useState(props.title);
    const data = useState(props.title)

    // co÷nsole.log(data);
    // debugger

    const clickHandler = () => {
        // setTitle('Updated!');
        setTitle('updated by Mark')
        // console.log('Clicked!', title);
        title = 'updated'

        

        console.log(title)
    }  

    return (<Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>Title: {title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>);
}
export default ExpenseItem;
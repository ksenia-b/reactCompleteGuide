import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })


    const titleChangeHandler = (event) => {
        console.log(event)
    //    setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     })

        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const amountChangeHandler = (event) => {
       setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
       setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            ...userInput
        }
        // console.log("expenseDate = ", expenseDate)
        props.onSaveExpenseData(expenseDate);
        setUserInput({
            enteredTitle: '',
            enteredDate: '',
            enteredAmount: ''
        });
    }

    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value = {userInput.enteredTitle}  onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <lable>Date</lable>
                <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler}></input>
            </div>
            {/* <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" />
            </div> */}
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
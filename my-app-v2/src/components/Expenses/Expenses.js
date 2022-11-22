import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2022)

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <ExpensesFilter onChangeFilter={filterChangeHandler}
                selected={filteredYear} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
          
        </div>
    )
}

export default Expenses;
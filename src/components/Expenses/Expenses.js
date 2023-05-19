import React, { useState } from 'react';

import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter.js';
import './ExpenseFilter.css';
import ExpensesChart from './ExpensesChart.js';

let Expenses = (props) => {
  console.log('props.expenses', props.items)

  let [selectedYear, setSelectedYear] = useState('2020')

  let onFilterChange = (selectedYear) => {
    setSelectedYear(selectedYear)

  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear(props.date).toString() == selectedYear;
  })
  console.log('filtered array', filteredExpense)
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={selectedYear}
          passSelectedYearInThisFunction={onFilterChange}
        />
      
      </Card>
      <ExpensesChart expenses={filteredExpense}></ExpensesChart>


      {filteredExpense.length == 0 ? <p className='noContent'>Sorry ! there is no content to render...</p> : filteredExpense.map((obj) => {
        return (
          <Card className='expenses'>

            <ExpenseItem
              title={obj.title}
              amount={obj.amount}
              date={obj.date}

              key={obj.id}
            ></ExpenseItem>

          </Card>

        );
      })}
    </div>
  );
}

export default Expenses;

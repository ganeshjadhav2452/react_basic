import React from 'react';

import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

let Expenses=(props) =>{
 console.log('props of expenses', props)
  return (
    <div>
      {props.items.map((obj) => {
        return (
          <Card className='expenses'>
            <ExpenseItem
              title={obj.title}
              amount={obj.amount}
              date={obj.date}
              location={obj.location}
            ></ExpenseItem>
          </Card>
        );
      })}
    </div>
  );
}

export default Expenses;

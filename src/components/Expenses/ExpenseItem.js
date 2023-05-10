import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card";
import React, { useState } from "react";

let ExpenseItem = (obj) => {

  const [title, setTitle] = useState(obj.title);

  let changeTitle = (e) => {
    setTitle("new Title");
    console.log("hey clicked");

    
  };

  const [value,setValue] = useState(obj.amount);

  const changeExpense=()=>{
    setValue(100)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={obj.date} />
      <ExpenseDetails
        title={title}
        location={obj.location}
        amount={value}
      ></ExpenseDetails>
      <button className="expense-item__price" onClick={changeTitle}>
        Change Title
      </button>
      <button className="expense-item__price" onClick={changeExpense}>
        Change Expense
      </button>
    </Card>
  );
};

export default ExpenseItem;

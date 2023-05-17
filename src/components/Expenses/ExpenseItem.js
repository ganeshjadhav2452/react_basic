import React from 'react';

// import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";


let ExpenseItem = (props) => {
 

  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  console.log('month is' ,month)

  console.log('props of expense item', props)
  return (
    <Card className="expense-item ">

      <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

    
    </Card>
  );
};

export default ExpenseItem;

import React from 'react';

import Expenses from "./components/Expenses/Expenses.js";

import Card from "./components/UI/Card.js";

import ExpenseFormJsx from "./components/ExpenseForm/ExpenseFormJsx.js";
import { useState } from "react";


let dummyData = [
  {
    id: "e1",
    title: 'toilet paper',
    amount: 94.12,
    date: new Date(2020, 6, 14),
    
    location: "Nana Generel Store",
  },
];
let App = (props) => {
const [expense,setExpense] = useState(dummyData)



  let getInputs = (enteredData) => {
    setExpense(prevExpense => {
      return [...prevExpense, enteredData]
    })
    console.log('entered Data from app.js',enteredData)
    console.log('expense Array',expense)
  };

  return (
    <div className="container">
      <Card>
        <ExpenseFormJsx sendObjectInThisFunction={getInputs}></ExpenseFormJsx>
      </Card>

      <Card>
        <Expenses items={expense}></Expenses>
      </Card>
    </div>
  );
};

export default App;

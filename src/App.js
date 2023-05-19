import React from 'react';

import Expenses from "./components/Expenses/Expenses.js";

import Card from "./components/UI/Card.js";

import ExpenseFormJsx from "./components/ExpenseForm/ExpenseFormJsx.js";
import { useState } from "react";


let dummyData = [];
let App = () => {
const [expense,setExpense] = useState(dummyData)


 
  let getInputs = (enteredData) => {
    setExpense(prevExpense => {
      return [...prevExpense, enteredData]
    })
   
  };
  
  return (
    <div className="container">
      <Card>
        <ExpenseFormJsx sendObjectInThisFunction={getInputs} props={expense}></ExpenseFormJsx>
       
      </Card>
     
    <Card >
    <Expenses items={expense} ></Expenses>
    </Card>
    
     
    </div>
  );
};


export default App;

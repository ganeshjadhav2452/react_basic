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

  return (
    <Card className="expense-item ">
      <ExpenseDate date={obj.date} />
      <ExpenseDetails
        title={title}
        location={obj.location}
        amount={obj.amount}
      ></ExpenseDetails>
      <button className="expense-item__price h-25 mt-3" onClick={changeTitle}>
        change title
      </button>
    </Card>
  );
};

export default ExpenseItem;

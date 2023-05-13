import Expenses from "./components/Expenses/Expenses.js";

import Card from "./components/UI/Card.js";

import ExpenseFormJsx from "./components/ExpenseForm/ExpenseFormJsx.js";

let App = (props) => {
  let expenses = [
    {
      id: "e1",
      title: props.title,
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Nana Generel Store",
    },
  ];

  let getInputs = (enteredData) => {
 
    console.log(enteredData)
    console.log(expenses)
  };

  return (
    <div className="container">
      <Card>
        <ExpenseFormJsx sendObjectInThisFunction={getInputs}></ExpenseFormJsx>
      </Card>

      <Card>
        <Expenses items={expenses}></Expenses>
      </Card>
    </div>
  );
};

export default App;

import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card";

let ExpenseItem = (obj) => {
  let deleteExpense = (e) => {
    console.log("hey clicked");

    let currentCard = e.target.closest(".expense-item");
    let parentOfExpense = currentCard.parentElement;
    parentOfExpense.removeChild(currentCard);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={obj.date} />
      <ExpenseDetails
        title={obj.title}
        location={obj.location}
        amount={obj.amount}
      ></ExpenseDetails>
      <button className="expense-item__price" onClick={deleteExpense}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;

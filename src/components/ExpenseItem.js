import ExpenseDate from './ExpenseDate.js'
import "./ExpenseItem.css";
import ExpenseDetails from  './ExpenseDetails.js';
function ExpenseItem(obj) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={obj.date} />
      <ExpenseDetails title={obj.title} location={obj.location} amount={obj.amount}></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;

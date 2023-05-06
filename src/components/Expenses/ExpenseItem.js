import ExpenseDate from './ExpenseDate.js'
import "./ExpenseItem.css";
import ExpenseDetails from  './ExpenseDetails.js';
import Card from '../UI/Card'

let ExpenseItem=(obj) =>{
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={obj.date} />
      <ExpenseDetails title={obj.title} location={obj.location} amount={obj.amount}></ExpenseDetails>
    </Card>
  );
}

export default ExpenseItem;

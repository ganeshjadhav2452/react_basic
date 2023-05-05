import "./ExpenseItem.css";

function ExpenseItem(obj) {
 
  return (
    <div className="expense-item">
      <div>{obj.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{obj.title}</h2>
        <h2>{obj.location}</h2>
        <div className="expense-item__price">${obj.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

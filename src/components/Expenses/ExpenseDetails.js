import ExpenseForm from '../ExpenseForm/ExpenseFormJsx.js'

let ExpenseDetails=(details)=> {


  return (
    <div className="expense-item__description">
      <h2>{details.title}</h2>
      <h2>{details.location}</h2>
      <div className="expense-item__price">${details.amount}</div>
    </div>
  );
}

export default ExpenseDetails;

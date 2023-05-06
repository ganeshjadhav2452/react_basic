import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

let Expenses=(props) =>{
  let expenses = props.items;
  return (
    <div>
      {expenses.map((obj) => {
        return (
          <Card className='expenses'>
            <ExpenseItem
              title={obj.title}
              amount={obj.amount}
              date={obj.date}
              location={obj.location}
            ></ExpenseItem>
          </Card>
        );
      })}
    </div>
  );
}

export default Expenses;


import Expenses from './components/Expenses/Expenses.js'

import Card from './components/UI/Card.js'

import ExpenseFormJsx from './components/ExpenseForm/ExpenseFormJsx.js';

let App = (props) => {
  let expenses = [
    {
      id: "e1",
      title: props.title,
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Nana Generel Store",
    }
  ];


  let getInputs =()=>{
    let userTitle = document.querySelector('.input1').value
    let userAmount = document.querySelector('.input2').value
    let userDate = document.querySelector('.input3').value



  }

  return (
    <div className='container'>
      <Card>
        <ExpenseFormJsx>

        </ExpenseFormJsx>

      </Card>
      

      <Card>



        <Expenses items={expenses}></Expenses>
      </Card>
    </div>

  );
}

export default App;

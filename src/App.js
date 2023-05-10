
import Expenses from './components/Expenses/Expenses.js'

import Card from './components/UI/Card.js'

import ExpenseForm from './components/Expenses/ExpenseForm.js'

let App = () => {
  let expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Nana Generel Store",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Gada Electronics",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
      location: "babu bhaiyya car company",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "shri furniture",
    },

  ];

  let getInputs =()=>{
    let userTitle = document.querySelector('.input1').value
    let userAmount = document.querySelector('.input2').value
    let userDate = document.querySelector('.input3').value


    console.log(`Title: ${userTitle}, Amount: ${userAmount}, Date: ${userDate}`)
  }

  return (
    <div className='container'>
      <Card>
        <ExpenseForm></ExpenseForm>

      </Card>
      <div className="col-12 d-flex justify-content-around mt-4 ">
        <button onClick={getInputs}
          type="submit"
          className="col-6 rounded-pill btn btn-primary fs-4 submitBtn"
        >
          Add Expense
        </button>
      </div>

      <Card>



        <Expenses items={expenses}></Expenses>
      </Card>
    </div>

  );
}

export default App;

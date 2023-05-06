
import Expenses from './components/Expenses/Expenses.js'

import Card from './components/UI/Card.js'

let App=() =>{
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

  return (
    <Card>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </Card>
  );
}

export default App;

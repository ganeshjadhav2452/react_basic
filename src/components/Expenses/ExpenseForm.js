

let ExpenseForm = () => {
  return (
    <div className="container">
      <form>
        <div className="row ">
          <div className="col">
            <input
              type="text"
              className="form-control input1"
              placeholder="Title of Expense"
            
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control input2"
              placeholder="Expense Amount"
            
            />
          </div>
          <div className="col">
            <input
              type="date"
              className="form-control input3"
            
             
            />
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default ExpenseForm;

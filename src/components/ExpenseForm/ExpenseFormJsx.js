import { useState } from "react";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import Card from "../UI/Card";
const ExpenseFormJsx = (props) => {
    const [updatedState, updateTheState] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const enteredTitle = (e) => {
        updateTheState({
            ...updatedState,
            enteredTitle: e.target.value,
        });
    };

    const enteredAmount = (e) => {
        updateTheState({
            ...updatedState,
            enteredAmount: e.target.value,
        });
    };

    const enteredDate = (e) => {
        updateTheState({
            ...updatedState,
            enteredDate: e.target.value,
        });
    };

    const GetAllInputData = (e) => {
        e.preventDefault();

        let allInputes = {
            title: updatedState.enteredTitle,
            amount: updatedState.enteredAmount,
            date: new Date( updatedState.enteredDate),
          };
        props.sendObjectInThisFunction(allInputes)
      

        updateTheState({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
    };

    return (
        <div className="container">
            <form onSubmit={GetAllInputData}>
                <div className="row ">
                    <div className="col">
                        <input
                            type="text"
                           
                            className="form-control input1"
                            placeholder="Title of Expense"
                            onChange={enteredTitle}
                            value={updatedState.enteredTitle}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            min="0.01" 
                            step="0.01" 
                            className="form-control input2"
                            placeholder="Expense Amount"
                            onChange={enteredAmount}
                            value={updatedState.enteredAmount}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            min="2019-05-01" 
                            max="2023-05-30" 
                            className="form-control input3"
                            onChange={enteredDate}
                            value={updatedState.enteredDate}
                        />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-around mt-4 ">
                    <button
                        type="submit"
                        className="col-6 rounded-pill btn btn-primary fs-4 submitBtn"
                    >
                        Add Expense
                    </button>
                </div>
            </form>
            
           
            
          
        </div>
    );
};

export default ExpenseFormJsx;

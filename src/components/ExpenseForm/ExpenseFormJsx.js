import { useState } from "react";

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
            enteredTitle: updatedState.enteredTitle,
            enteredAmount: updatedState.enteredAmount,
            enteredDate: updatedState.enteredDate,
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
                            className="form-control input2"
                            placeholder="Expense Amount"
                            onChange={enteredAmount}
                            value={updatedState.enteredAmount}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
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

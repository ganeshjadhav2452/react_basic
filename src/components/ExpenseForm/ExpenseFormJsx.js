import { useState } from "react";

const ExpenseFormJsx = () => {
    const [updatedSate, updateTheState] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });


    const enteredTitle = (e) => {
        updateTheState({
            ...updatedSate,
            enteredTitle: e.target.value,
        });

    };

    const enteredAmount = (e) => {
        updateTheState({
            ...updatedSate,
            enteredAmount: e.target.value,
        });

    };

    const enteredDate = (e) => {
        updateTheState({
            ...updatedSate,
            enteredDate: e.target.value,
        });

    };

    const GetAllInputData = (e) => {
        e.preventDefault();
        console.log(updatedSate)
    }

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
                        />
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control input2"
                            placeholder="Expense Amount"
                            onChange={enteredAmount}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control input3"
                            onChange={enteredDate}
                        />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-around mt-4 ">
                    <button
                        type="submit"
                        className="col-6 rounded-pill btn btn-primary fs-4 submitBtn" >
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseFormJsx;

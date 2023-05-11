import { useState } from "react";

const ExpenseFormJsx = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const enteredTitle = (e) => {
        setTitle(e.target.value)
        console.log(title)

    }

    const enteredAmount = (e)=>{
       setAmount(e.target.value)
       console.log(amount)
    }
    const enteredDate = (e)=>{
        setDate(e.target.value)
        console.log(date)

    }

    return (
        <div className="container">
            <form>
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

            </form>
        </div>
    );

}

export default ExpenseFormJsx;
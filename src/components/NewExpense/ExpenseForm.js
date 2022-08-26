import React, { useState } from "react";
import "./ExpenseForm.css"


const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enterdTitle: '',
        enterdAmount: '',
        enteredDate: ''
    })
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setUserInput((userInput) => {
            return { ...userInput, enterdTitle: event.target.value }
        })
    };
    const amountChangeHandler = (event) => {
        setUserInput((userInput) => {
            return {
                ...userInput, enterdAmount: event.target.value
            }
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput((userInput) => {
            return {
                ...userInput, enteredDate: event.target.value
            }
        })
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = { userInput }
        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        // setUserInput({
        //     enterdAmount: '',
        //     enterdTitle: '',
        //     enteredDate: ''

        // })
        // setUserInput((userInput) => {
        //     return {
        //         enteredDate: '', enterdAmount: '', enterdTitle: ''
        //     }
        // })

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title </label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount </label>
                    <input type="number" min="0" step="0.5" name={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Date </label>
                    <input type="Date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense </button>
            </div>
        </form>
    );
}

export default ExpenseForm;
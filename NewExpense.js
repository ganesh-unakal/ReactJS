import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense=(props)=>{

    const saveExpenseDataHandle=(enteredExpenseData)=>{ //'enteredDataHandler' acces the submitHandler 
        const expesneData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expesneData)
    }

    return (
     <div className="new-expense">
        <ExpenseForm onSavingExpenseData={saveExpenseDataHandle} />
       
     </div>
    );
}
export default NewExpense;
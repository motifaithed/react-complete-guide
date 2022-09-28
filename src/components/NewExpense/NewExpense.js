import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props)=>{

    const saveExpenseDataHandler =  (data)=>{
        const savedData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(savedData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;
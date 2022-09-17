import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = function (props) {
  const expenseDataHandler = function(enteredData){
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;

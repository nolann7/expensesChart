import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = function (enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = function () {
    setIsEditing(true);
  };
  const finishEditingHandler = function () {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          finishEditing={finishEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

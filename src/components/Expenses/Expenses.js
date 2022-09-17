import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const inputYearFilterHandler = function (year) {
    setFilteredYear(year);
  };
  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear() === Number(filteredYear),
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onInputYearFilter={inputYearFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default Expenses;

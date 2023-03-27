import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
//import Expense from './Expense'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

/*{filteredExpenses.length === 0 ? (
  <p>No Expense Found</p>
) : (
  filteredExpenses.map(
    (
      expense,
      index //props items means array of items which is in App.js file
    ) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title} //expesne is used to extract the title
        amount={expense.amount}
        date={expense.date}
      />
    )
  )
)}*/

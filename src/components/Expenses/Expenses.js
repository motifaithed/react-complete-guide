import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const setFilteredYearHandler = (receivedYear) => {
    setFilteredYear(receivedYear);
    console.log("You are at expenses component");
  };

  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSetFilteredYear={setFilteredYearHandler}
          selected={filteredYear}
        ></ExpensesFilter>
      </Card>
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

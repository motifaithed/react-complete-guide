import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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

  let conditionalContent = <p>No data found</p>;

  if (filteredExpenses.length > 0) {
    conditionalContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSetFilteredYear={setFilteredYearHandler}
          selected={filteredYear}
        ></ExpensesFilter>
      </Card>
      <Card className="expenses">{conditionalContent}</Card>
    </div>
  );
}

export default Expenses;

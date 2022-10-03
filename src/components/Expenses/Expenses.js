import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  console.log(filteredYear);
  const setFilteredYearHandler = (receivedYear) => {
    setFilteredYear(receivedYear);
    console.log("You are at expenses component");
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSetFilteredYear={setFilteredYearHandler}
          selected={filteredYear}
        ></ExpensesFilter>
      </Card>
      <Card className="expenses">
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;

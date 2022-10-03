import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const expenseData = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 300.0,
    date: new Date(2020, 3, 12),
  },
  { id: "e3", title: "Candies", amount: 400.67, date: new Date(2021, 4, 12) },
  {
    id: "e4",
    title: "Chocolates",
    amount: 250.68,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseDataHandler = (data) => {
    console.log("You are on app js");
    setExpenses((previousExpense) => {
      return [data, ...previousExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;

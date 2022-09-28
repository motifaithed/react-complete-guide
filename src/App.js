
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id:"e1",title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 12) },
    { id:"e2",title: "Toilet Paper", amount: 300.00, date: new Date(2021, 3, 12) },
    { id:"e3",title: "Candies", amount: 400.67, date: new Date(2021, 4, 12) },
    { id:"e4",title: "Chocolates", amount: 250.68, date: new Date(2021, 5, 12) },
  ];

  const addExpenseDataHandler = (data)=>{
    console.log('You are on app js');
    const returnedData = {
      ...data
    }
    console.log(returnedData);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseDataHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
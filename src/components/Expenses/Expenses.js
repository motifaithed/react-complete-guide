import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  
  const [filteredYear, setFilteredYear ] = useState("2019");
  console.log(filteredYear);
  const setFilteredYearHandler = (receivedYear)=>{
    setFilteredYear(receivedYear);
    console.log('You are at expenses component');
    
  }
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onSetFilteredYear = {setFilteredYearHandler} selected={filteredYear}></ExpensesFilter>
    </Card>
    <Card className="expenses">
      
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default Expenses;

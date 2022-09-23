
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 12) },
    { title: "Toilet Paper", amount: 300.00, date: new Date(2021, 3, 12) },
    { title: "Candies", amount: 400.67, date: new Date(2021, 4, 12) },
    { title: "Chocolates", amount: 250.68, date: new Date(2021, 5, 12) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;

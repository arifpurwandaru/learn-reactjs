import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: "e01",
    tgl: new Date(2022, 5, 12),
    desk: "Toilet Papir",
    amount: 94.12,
  },
  {
    id: "e02",
    tgl: new Date(2021, 3, 28),
    desk: "New Tv",
    amount: 784.12,
  },
  {
    id: "e03",
    tgl: new Date(2020, 10, 11),
    desk: "Car Insurance",
    amount: 94.12,
  },
  {
    id: "e04",
    tgl: new Date(2021, 8, 29),
    desk: "New Desk",
    amount: 450,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdd={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

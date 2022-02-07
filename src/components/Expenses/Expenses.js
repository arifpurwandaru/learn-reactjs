import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(elem) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const theFilterHandler = (val) => {
    setFilteredYear(val);
  };

  const theList = elem.expenses.filter(
    (x) => x.tgl.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        filterTaunHandler={theFilterHandler}
      />
      <ExpensesChart expenses={theList} />
      <ExpensesList theList={theList} />
    </Card>
  );
}
export default Expenses;

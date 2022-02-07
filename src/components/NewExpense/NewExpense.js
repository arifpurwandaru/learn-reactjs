import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSubmitSaveExpense = (expData) => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    };
    props.onExpenseAdd(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          orakalap={onSubmitSaveExpense}
          jurusMenghilang={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

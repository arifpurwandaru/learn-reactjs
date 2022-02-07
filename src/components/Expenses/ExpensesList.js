import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.theList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.theList.map((x) => (
        <ExpenseItem key={x.id} desk={x.desk} tgl={x.tgl} amount={x.amount} />
      ))}
    </ul>
  );
};

export default ExpensesList;

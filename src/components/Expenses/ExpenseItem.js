import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(elem) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate tgl={elem.tgl} />
        <div className="expense-item__description">
          <h2>{elem.desk}</h2>
          <div className="expense-item__price">${elem.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

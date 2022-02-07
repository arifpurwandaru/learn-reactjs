import "./ExpenseDate.css";

function ExpenseDate(elem) {
  const month = elem.tgl.toLocaleString("in-ID", { month: "long" });
  const day = elem.tgl.toLocaleString("en-US", { day: "2-digit" });
  const year = elem.tgl.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

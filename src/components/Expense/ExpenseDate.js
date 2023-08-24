import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ item }) => {
  const month = item.date.toLocaleString("en-US", { month: "long" });
  const day = item.date.toLocaleString("en-US", { day: "numeric" });
  const year = item.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="ExpenseDate">
      <p>{month}</p>
      <p>{year}</p>
      <p>{day}</p>
    </div>
  );
};

export default ExpenseDate;

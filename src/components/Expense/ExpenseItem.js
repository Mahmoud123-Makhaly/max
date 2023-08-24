import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ item }) => {
  return (
    <div className="ExpenseItem">
      <div className="price-title">
        <ExpenseDate item={item} />
        <h3 style={{ color: "#fff" }} className="ExpenseItem-title">
          {item.title}
        </h3>
      </div>
      <span className="price">${item.price}</span>
    </div>
  );
};

export default ExpenseItem;

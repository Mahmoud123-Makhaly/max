import React, { useState } from "react";

const Form = ({ onAddItemsToList }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpenseItem = {
      title: title,
      price: price,
      date: new Date(date),
    };
    onAddItemsToList(newExpenseItem);
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ color: "#FFf" }}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Date"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ammount</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="Date"
          className="form-control"
          id="exampleInputPassword1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Title"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

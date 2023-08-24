import React from "react";

const SelectExpense = ({ selectedItem, changeSelectedItem }) => {
  const handleChange = (e) => {
    changeSelectedItem(e.target.value)
  };
  return (
    <select value={selectedItem} class="form-control" onChange={handleChange}>
      <option value={"2020"}>2020</option>
      <option value={"2021"}>2021</option>
      <option value={"2022"}>2022</option>
      <option value={"2023"}>2023</option>
    </select>
  );
};

export default SelectExpense;

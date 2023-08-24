import { useState } from "react";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Form from "./components/Form/Form";
import Card from "./components/Ui/Card";
import SelectExpense from "./components/SelectExpense/SelectExpense";
 const App = () => {
  const [selectedItem, setSelectedItem] = useState("2022");

  const [items, setItems] = useState([
    { date: new Date(22, 10, 2022), title: "Toilet Paper", price: 94.12 },
    { date: new Date(12, 5, 2022), title: "New Tv", price: 799.12 },
    { date: new Date(27, 1, 2027), title: "Car Insurance", price: 248.12 },
    { date: new Date(1, 12, 2021), title: "New Desc (Wooden)", price: 450.12 },
  ]);
  const onAddItemsToList = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };
  const changeSelectedItem = (selected) => {
    setSelectedItem(selected);
  };
  let filteredYears = "2020  ,2021 , 2022 , 2023";
  if (selectedItem === "2020") {
    filteredYears = "2021 , 2022, 2023";
  } else if (selectedItem === "2021") {
    filteredYears = "2020 , 2022, 2023";
  } else if (selectedItem === "2022") {
    filteredYears = "2020 , 2021, 2023";
  } else if (selectedItem === "2023") {
    filteredYears = "2020 , 2021, 2022";
  }
  return (
    <div className="app">
      <Form onAddItemsToList={onAddItemsToList} />
      <Card>
        <SelectExpense
          selectedItem={selectedItem}
          changeSelectedItem={changeSelectedItem}
        />
        <p>the selected yaer is {filteredYears}</p>
        {items.map((item) => {
          return <ExpenseItem key={item.title} item={item} />;
        })}
      </Card>
    </div>
  );
};

export default App;

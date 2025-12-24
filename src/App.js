import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  // Calendar date (user selectable)
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  //  Formatted date
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ➕ Add todo
  const addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  // ❌ Delete todo
  const deleteListItem = (key) => {
    setListTodo(listTodo.filter((_, index) => index !== key));
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />

        <h1 className="app-heading">TODO</h1>

        {/*  Scrollable Calendar */}
        <input
          type="date"
          className="calendar-input"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        {/*  Selected Date Display */}
        <p className="date-text">{formattedDate}</p>

        <hr />

        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

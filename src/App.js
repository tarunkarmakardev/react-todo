import React, { useState } from "react";
import "./css/index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, settodoItem] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const randomID = (index) => {
    return Math.floor((Math.random() + (index + 1)) * 1000);
  };

  const handleAddTodo = () => {
    if (inputText !== "") {
      settodoItem((oldData) => {
        let index = todoItems.indexOf(...oldData);
        const id = randomID(index + 2);
        return [...oldData, { id: id, text: inputText }];
      });
    }

    setInputText("");
  };

  const deleteTodo = (id) => {
    settodoItem(() => {
      return todoItems.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <div className="main-container bg-alpha">
        <div className="todo-container">
          <div className="heading">Got any tasks?</div>
          <TodoForm
            change={handleChange}
            value={inputText}
            click={handleAddTodo}
          ></TodoForm>
          <TodoList todoItems={todoItems} onClick={deleteTodo}></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;

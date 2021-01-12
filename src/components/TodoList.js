import React from "react";
import "../css/index.css";

function TodoList(props) {
  return (
    <>
      <div className="todolist-content bg-beta">
        <ul>
          {props.todoItems.map((item, index) => {
            return (
              <li className="todolist-task" key={item.id}>
                <div>&gt; {item.text}</div>
                <div
                  className="delete-button"
                  onClick={() => props.onClick(item.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;

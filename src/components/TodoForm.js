import React from "react";
import "../css/index.css";

function TodoForm(props) {
  const handlekeypress = (e) => {
    if (e.charCode === 13) {
      props.click();
    }
  };

  return (
    <>
      <div className="todoform">
        <input
          className="todoinput"
          type="text"
          placeholder="Enter your tasks here"
          onChange={props.change}
          value={props.value}
          onKeyPress={handlekeypress}
        />
        <button className="addtodo bg-beta" onClick={props.click}>
          +
        </button>
      </div>
    </>
  );
}

export default TodoForm;

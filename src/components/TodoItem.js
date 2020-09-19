import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";
//import TodoList from "./components/TodoList";

const TodoItem = ({ todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "ckecked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};
export default TodoItem;

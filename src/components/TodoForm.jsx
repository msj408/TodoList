import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        onChange={handleChange}
        type="text"
        placeholder="What Task?"
        className="todo-input"
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

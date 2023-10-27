import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task;

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;

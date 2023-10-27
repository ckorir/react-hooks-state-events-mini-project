import React from "react";

function TaskList({ children }) {
  return (
    <div className="tasks">
      <h5>Tasks</h5>
      <div className="task-list">
        {children}
      </div>
    </div>
  );
}

export default TaskList;

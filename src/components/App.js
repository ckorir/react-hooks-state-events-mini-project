import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task"; // Import the Task component

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize selectedCategory state

  const handleCategoryClick = (category) => {
    // Update the selected category and filter tasks
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);
  };

  // Function to filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} // Pass the list of categories as a prop
        selectedCategory={selectedCategory} // Pass the selected category
        onCategoryClick={handleCategoryClick} // Pass the event handler
      />
      <NewTaskForm 
        categories={CATEGORIES} // Pass the list of categories as a prop
        onTaskFormSubmit={handleTaskFormSubmit} // Pass the form submit handler
      />
      <TaskList>
        {/* Map through filtered tasks and render each one using the Task component */}
        {filteredTasks.map((task) => (
          <Task
            key={task.text} // Use a key prop
            task={task}
            onDelete={deleteTask} // Pass a function to handle task deletion
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
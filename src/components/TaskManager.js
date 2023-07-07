import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskValue, setEditingTaskValue] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskValue(tasks[index]);
  };

  const handleEditingTaskChange = (event) => {
    setEditingTaskValue(event.target.value);
  };

  const handleEditingTaskSubmit = (event) => {
    event.preventDefault();
    if (editingTaskValue.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = editingTaskValue;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditingTaskValue("");
    }
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editingTaskIndex === index ? (
              <form onSubmit={handleEditingTaskSubmit}>
                <input
                  type="text"
                  value={editingTaskValue}
                  onChange={handleEditingTaskChange}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                {task}
                <div>
                  <button onClick={() => handleTaskEdit(index)}>Edit</button>
                  <button onClick={() => handleTaskDelete(index)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

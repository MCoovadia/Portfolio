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
    <div className="task-manager bg-gray-100">
      <h2 className="text-2xl font-bold">Task Manager</h2>
      <form onSubmit={handleNewTaskSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleNewTaskChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${
              index === tasks.length - 1 ? "border-2 border-primary" : ""
            }`}
          >
            {editingTaskIndex === index ? (
              <form onSubmit={handleEditingTaskSubmit} className="mb-2">
                <input
                  type="text"
                  value={editingTaskValue}
                  onChange={handleEditingTaskChange}
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary mt-2">
                  Save
                </button>
              </form>
            ) : (
              <>
                {task}
                <div className="mt-2">
                  <button
                    onClick={() => handleTaskEdit(index)}
                    className="btn btn-primary mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleTaskDelete(index)}
                    className="btn btn-danger"
                  >
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

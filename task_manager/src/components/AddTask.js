// src/components/AddTask.js

import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '' || dueDate.trim() === '') {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      task,
      dueDate,
      priority,
    };

    addTask(newTask);

    setTask('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date
        </label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <select
          className="form-select"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;

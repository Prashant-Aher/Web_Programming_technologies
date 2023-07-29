// src/components/TaskList.js

import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Task Name</th>
          <th scope="col">Due Date</th>
          <th scope="col">Priority</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.task}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;

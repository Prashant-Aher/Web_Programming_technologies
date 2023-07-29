import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mt-4">
      <h1>Todo Web Application</h1>
      <AddTask addTask={addTask} />
      <hr />
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default App;


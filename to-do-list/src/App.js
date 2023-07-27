import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Load tasks from local storage on the initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('todoList') || '[]');
    setTodoList(storedTasks);
  }, []);

  // Save tasks to local storage whenever the todoList state changes
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleAddToList = () => {
    if (!taskName || !duration) {
      alert('Please enter both Task Name and Duration.');
      return;
    }

    const newTask = {
      id: Date.now(),
      taskName,
      duration: parseFloat(duration),
    };

    setTodoList([...todoList, newTask]);
    setTaskName('');
    setDuration('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <div className="App-content">
        <form>
          <label>
            Task Name:
            <input type="text" value={taskName} onChange={handleTaskNameChange} />
          </label>
          <label>
            Duration (in hours):
            <input type="number" value={duration} onChange={handleDurationChange} />
          </label>
          <button type="button" onClick={handleAddToList}>Add List</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Duration (hours)</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((task) => (
              <tr key={task.id}>
                <td>{task.taskName}</td>
                <td>{task.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;





// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [taskName, setTaskName] = useState('');
//   const [duration, setDuration] = useState('');
//   const [todoList, setTodoList] = useState([]);

//   const handleTaskNameChange = (event) => {
//     setTaskName(event.target.value);
//   };

//   const handleDurationChange = (event) => {
//     setDuration(event.target.value);
//   };

//   const handleAddToList = () => {
//     if (!taskName || !duration) {
//       alert('Please enter both Task Name and Duration.');
//       return;
//     }

//     const newTask = {
//       id: Date.now(),
//       taskName,
//       duration: parseFloat(duration),
//     };

//     setTodoList([...todoList, newTask]);
//     setTaskName('');
//     setDuration('');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>ToDo List</h1>
//       </header>
//       <div className="App-content">
//         <form>
//           <label>
//             Task Name:
//             <input type="text" value={taskName} onChange={handleTaskNameChange} />
//           </label>
//           <label>
//             Duration (in hours):
//             <input type="number" value={duration} onChange={handleDurationChange} />
//           </label>
//           <button type="button" onClick={handleAddToList}>Add List</button>
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>Task Name</th>
//               <th>Duration (hours)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todoList.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.taskName}</td>
//                 <td>{task.duration}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;

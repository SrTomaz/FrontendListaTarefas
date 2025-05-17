import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';


const socket = io('http://localhost:3001');

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Carregar tarefas do backend
  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(res => setTasks(res.data))
      .catch(console.error);
  }, []);

  // Eventos do WebSocket
  useEffect(() => {
    socket.on('new-task', task => {
      setTasks(prev => [...prev, task]);
    });

    socket.on('update-task', updatedTask => {
      setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
    });

    socket.on('delete-task', id => {
      setTasks(prev => prev.filter(t => t.id !== id));
    });

    return () => {
      socket.off('new-task');
      socket.off('update-task');
      socket.off('delete-task');
    }
  }, []);

  // Adicionar nova tarefa
  const addTask = () => {
    if (newTaskTitle.trim() === '') return;
    axios.post('http://localhost:3001/tasks', { title: newTaskTitle })
      .then(() => setNewTaskTitle(''))
      .catch(console.error);
  };

  // Marcar tarefa como concluída
  const completeTask = (id) => {
    axios.put(`http://localhost:3001/tasks/${id}`)
      .catch(console.error);
  };

  // Excluir tarefa
  const deleteTask = (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`)
      .catch(console.error);
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
          placeholder="Nova tarefa..."
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              id={`${task.id}`}
              checked={!!task.completed}
              onChange={() => completeTask(task.id)}
            />
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

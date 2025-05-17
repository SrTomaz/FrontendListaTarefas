// src/components/TaskList.jsx
export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => onToggle(task.id)}
          >
            {task.title}
          </span>
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

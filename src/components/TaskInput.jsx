export default function TaskInput({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        id="task-input"
        placeholder="Digite a tarefa"
        value={value}
        onChange={onChange}
      />
      <button onClick={onAdd}>Adicionar</button>
    </div>
  );
}
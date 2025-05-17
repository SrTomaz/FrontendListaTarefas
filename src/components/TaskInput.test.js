// src/components/TaskInput.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TaskInput from './TaskInput';

test('renderiza o input e o botão', () => {
  render(<TaskInput value="" onChange={() => {}} onAdd={() => {}} />);
  expect(screen.getByPlaceholderText(/digite a tarefa/i)).toBeInTheDocument();
  expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
});

test('chama onAdd ao clicar no botão', () => {
  const onAddMock = jest.fn();
  render(<TaskInput value="Nova tarefa" onChange={() => {}} onAdd={onAddMock} />);

  fireEvent.click(screen.getByText(/adicionar/i));
  expect(onAddMock).toHaveBeenCalled();
});

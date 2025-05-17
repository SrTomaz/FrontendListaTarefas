// src/components/TaskInput.test.js
import { render, screen } from '@testing-library/react';
import TaskInput from './TaskInput';

test('renderiza o input e o botão', () => {
  render(<TaskInput value="" onChange={() => {}} onAdd={() => {}} />);
  expect(screen.getByPlaceholderText(/digite a tarefa/i)).toBeInTheDocument();
  expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
});



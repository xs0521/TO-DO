// TodoItem.tsx
import React from 'react';
import './TodoList.css'

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  deleteTodo: () => void;
  completeTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <li>
      <div className='list-item'>
        <div className='list-item-text'>
            <input className='list-item-checkbox' type="checkbox" checked={todo.completed} onChange={completeTodo} />
            {todo.completed ? <s>{todo.text}</s> : todo.text}
        </div>
        <button className='delete-button' onClick={deleteTodo}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

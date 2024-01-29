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
      <div className='list-item-container'>
        <div className='list-item'>
            <input className='list-item-checkbox' type="checkbox" checked={todo.completed} onChange={completeTodo} />
            <div className='list-item-text'>
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </div>
        </div>
        <button className='list-item-delete-button' onClick={deleteTodo}>DELETE</button>
      </div>
    </li>
  );
};

export default TodoItem;

// TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-body'>
      <h1 className='item-title'>Todo List</h1>
      <div className='bottom-container'>
      <form className='input-container' onSubmit={addTodo}>
        <input className='add-input-text' type="text" value={newTodo} onChange={handleInputChange} />
        <button className="submit-button" type="submit">Add</button>
      </form>
      <ul className='list-container'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            completeTodo={() => completeTodo(todo.id)}
          />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;

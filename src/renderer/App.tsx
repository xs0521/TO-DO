import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from '../todo/TodoList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

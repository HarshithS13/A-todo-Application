import { useState, useEffect } from 'react';
import TodoService from '../services/TodoService';
import type { Todo } from '../services/TodoService';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newTodo, setNewTodo] = useState<{ title: string; description: string }>({
    title: '',
    description: ''
  });

  // Fetch all todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch all todos from the API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await TodoService.getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle creating a new todo
  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const createdTodo = await TodoService.createTodo({
        title: newTodo.title,
        description: newTodo.description,
        completed: false
      });
      setTodos([createdTodo, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (err) {
      setError('Failed to create todo.');
      console.error(err);
    }
  };

  // Function to handle toggling todo completion status
  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await TodoService.toggleTodoStatus(id, !completed);
      setTodos(
        todos.map(todo => 
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo status.');
      console.error(err);
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = async (id: string) => {
    try {
      await TodoService.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo.');
      console.error(err);
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      {/* Error message */}
      {error && <div className="error">{error}</div>}
      
      {/* New Todo Form */}
      <form onSubmit={handleCreateTodo} className="todo-form">
        <div>
          <input
            type="text"
            placeholder="Todo title"
            value={newTodo.title}
            onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Description (optional)"
            value={newTodo.description}
            onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
      
      {/* Loading indicator */}
      {loading ? (
        <div>Loading todos...</div>
      ) : (
        <ul className="todos">
          {todos.length === 0 ? (
            <li>No todos found. Create one!</li>
          ) : (
            todos.map(todo => (
              <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo._id!, todo.completed)}
                  />
                  <span className="todo-title">{todo.title}</span>
                </div>
                {todo.description && <p className="todo-desc">{todo.description}</p>}
                <button 
                  onClick={() => handleDeleteTodo(todo._id!)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default TodoList; 
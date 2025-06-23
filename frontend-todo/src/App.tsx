import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Harshith. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

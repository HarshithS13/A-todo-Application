import axios from 'axios';

// Define the Todo interface
export interface Todo {
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date;
}

// Base URL for the API
const API_URL = 'http://localhost:3001/api/todos';

// Configure axios
axios.defaults.withCredentials = true;

// Service class for handling todo API interactions
class TodoService {
  // Get all todos
  async getAllTodos(): Promise<Todo[]> {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }

  // Get a single todo by ID
  async getTodoById(id: string): Promise<Todo> {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching todo with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new todo
  async createTodo(todo: Todo): Promise<Todo> {
    try {
      const response = await axios.post(API_URL, todo);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  }

  // Update a todo
  async updateTodo(id: string, todo: Todo): Promise<Todo> {
    try {
      const response = await axios.put(`${API_URL}/${id}`, todo);
      return response.data;
    } catch (error) {
      console.error(`Error updating todo with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a todo
  async deleteTodo(id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting todo with ID ${id}:`, error);
      throw error;
    }
  }

  // Toggle todo completion status
  async toggleTodoStatus(id: string, completed: boolean): Promise<Todo> {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { completed });
      return response.data;
    } catch (error) {
      console.error(`Error toggling todo status with ID ${id}:`, error);
      throw error;
    }
  }
}

// Export a singleton instance of the service
export default new TodoService(); 
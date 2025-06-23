import express from 'express';
import type { RequestHandler } from 'express';
import { 
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController';

const router = express.Router();

// GET /api/todos - Get all todos
router.get('/', getAllTodos as RequestHandler);

// GET /api/todos/:id - Get a single todo by ID
router.get('/:id', getTodoById as RequestHandler);

// POST /api/todos - Create a new todo
router.post('/', createTodo as RequestHandler);

// PUT /api/todos/:id - Update a todo
router.put('/:id', updateTodo as RequestHandler);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', deleteTodo as RequestHandler);

export default router; 
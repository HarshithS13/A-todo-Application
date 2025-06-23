import mongoose from 'mongoose';

export interface ITodo {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema = new mongoose.Schema<ITodo>({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Todo = mongoose.model<ITodo>('Todo', todoSchema);

export default Todo; 
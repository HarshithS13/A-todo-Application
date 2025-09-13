# Todo Application Project

A full-stack Todo application with React frontend and Express backend.

## Project Structure

This project consists of two main parts:

- `frontend-todo/`: React + TypeScript + Vite frontend application
- `backend-todo/`: Bun + Express + TypeScript + MongoDB backend API

## Backend

The backend provides a RESTful API for todo management.

### Prerequisites

- Bun v1.2.0 or higher
- MongoDB (running locally on port 27017 or update the connection string in index.ts)

### Setup

1. Navigate to the backend directory:
   ```
   cd backend-todo
   ```
2. Install dependencies:
   ```
   bun install
   ```
3. Make sure MongoDB is running
4. Start the server:
   ```
   bun dev
   ```

### API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo by ID
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Sample Request for Creating/Updating a Todo

```json
{
  "title": "Complete assignment",
  "description": "Finish the math homework by Friday",
  "completed": false
}
```

## Frontend

The frontend is a React application built with TypeScript and Vite.

### Setup

1. Navigate to the frontend directory:
   ```
   cd frontend-todo
   ```
2. Install dependencies:
   ```
   bun install
   ```
3. Start the development server:
   ```
   bun dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Running the Complete Application

1. Start the backend server (in one terminal):
   ```
   cd backend-todo
   bun dev
   ```
2. Start the frontend development server (in another terminal):
   ```
   cd frontend-todo
   bun dev
   ```
3. Access the application at `http://localhost:5173`

## Environment Variables

### Backend
- `PORT`: Server port (defaults to 3001)
- `MONGODB_URI`: MongoDB connection string (defaults to 'mongodb://localhost:27017/todo-app')

### Frontend
No specific environment variables are required, but you can create a `.env` file in the frontend directory if needed. 
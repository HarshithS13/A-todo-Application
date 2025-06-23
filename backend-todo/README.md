# Todo API Backend

A simple RESTful API for todo management built with Bun, Express, and MongoDB.

## Prerequisites

- Bun v1.2.0 or higher
- MongoDB (running locally on port 27017 or update the connection string in index.ts)

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   bun install
   ```
3. Make sure MongoDB is running
4. Start the server:
   ```
   bun dev
   ```

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo by ID
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Sample Request Body for Creating/Updating a Todo

```json
{
  "title": "Complete assignment",
  "description": "Finish the math homework by Friday",
  "completed": false
}
```

## Environment Variables

- `PORT`: Server port (defaults to 3001)
- `MONGODB_URI`: MongoDB connection string (defaults to 'mongodb://localhost:27017/todo-app')

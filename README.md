# ToDo App API 
This is a simple ToDo app backend API with login and registration functionality.

## Overview
The ToDo app API provides endpoints for managing tasks and user authentication. Users can register for an account, log in, create, update, delete tasks, and mark tasks as completed.

## Installation
To run the ToDo app API locally, follow these steps:

1- Clone the repository:
`git clone https://github.com/muha2311/ToDoApp.git`

2- Navigate to the project directory:
`cd todo-app-backend`

Install dependencies in `package.json`

# API Endpoints

## Authentication

**POST /Users**: Register a new user.
<br>
**POST /Login**: Log in an existing user.

## Tasks
**GET /ToDo/:id**: Get all tasks for a user.
<br>
**POST /ToDo:id**: Create a new task for a user.
<br>
**DELETE /ToDo/:id/:id**: Delete a task for a user.

## Technologies Used
Node.js
<br>
Express.js
<br>
MongoDB
<br>
JSON Web Tokens (JWT) for authentication


## License
This project is licensed under the MIT License - see the LICENSE file for details.

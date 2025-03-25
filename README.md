# Project Management System

A full-stack project management application built with React.js and Spring Boot.

## Features

- User Authentication & Authorization
- Project Creation and Management
- Task Management within Projects
- Real-time Updates
- Responsive Design
- JWT-based Security

## Tech Stack

### Frontend

- React.js
- Redux Toolkit
- Tailwind CSS
- Vite

### Backend

- Spring Boot
- Spring Security
- JWT Authentication
- MySQL Database

## Project Structure

```
project-management/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store and slices
│   │   └── assets/       # Static assets
│   └── public/           # Public assets
│
└── server/               # Backend Spring Boot application
    └── projectmangement/
        ├── src/
        │   ├── main/
        │   │   ├── java/
        │   │   │   └── com/projectmangement/
        │   │   │       ├── config/     # Configuration classes
        │   │   │       ├── controller/ # REST controllers
        │   │   │       ├── service/    # Business logic
        │   │   │       ├── dao/        # Data access objects
        │   │   │       └── entities/   # Database entities
        │   │   └── resources/
        │   └── test/
        └── pom.xml
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Java 17
- MySQL

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server/projectmangement
./mvnw spring-boot:run
```

## API Endpoints

### Authentication

- POST /api/auth/register - Register new user
- POST /api/auth/login - User login

### Projects

- GET /api/projects - Get all projects
- POST /api/projects - Create new project
- GET /api/projects/{id} - Get project by ID
- PUT /api/projects/{id} - Update project
- DELETE /api/projects/{id} - Delete project

### Tasks

- GET /api/projects/{projectId}/tasks - Get all tasks for a project
- POST /api/projects/{projectId}/tasks - Create new task
- PUT /api/projects/{projectId}/tasks/{taskId} - Update task
- DELETE /api/projects/{projectId}/tasks/{taskId} - Delete task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributors

- [Parshav Andhariya]

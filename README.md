# Express.js + JWT + PostgreSQL Boilerplate

A boilerplate with Express.js backend (using JWT authentication), containerized with Docker and PostgreSQL.

## Features

- **Backend**: Express.js with JWT authentication, PostgreSQL with Knex.js, migrations/seeding, role-based access
- **Frontend**: React.js with Vite
- **DevOps**: Docker containerization with hot-reload in development

## Prerequisites

- Docker and Docker Compose
- Node.js ≥ 22.0.0 (only needed if running outside Docker)

## Getting Started

1. **Copy the environment file**:
   ```bash
   cp .env.example .env

2. **Start the application**:
   ```bash
    docker compose up --build --watch
    
  For subsecuent runs
  
    ```bash
     docker compose up --watch
    
 3. **Initialize the database (in a new terminal):**:
    ```bash
    docker compose exec backend npm run migrate:latest
    docker compose exec backend npm run seed:run
  
## Development Workflow
### Create new migration:

  ```bash
  docker compose exec backend npm run migrate:make migration_name
  ````
### Run migrations:

```bash
docker compose exec backend npm run migrate:latest
```
### Rollback migration:
```bash
docker compose exec backend npm run migrate:rollback
```
### Run seeds:
```bash
docker compose exec backend npm run seed:run
```


### Project Structure
```bash
├── src/
│   ├── controllers/       # Route controllers
│   ├── db/                # Database configuration
│   ├── middlewares/       # Express middlewares
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   └── validators/        # Request validators
├── app.js                 # Express app configuration
├── server.js              # Server entry point
└── knexfile.js            # Knex configuration
```
### Default Users
The seed creates these users:
(You can edit these values in the .env file before runinig the seeds)
Admin: 
  -email: saespibt@gmail.com
  -password: admin
Basic User: 
  -email: saespinosab@gmail.com
  -password: basic
## Production Build
```bash
  docker compose -f compose.yml build --target prod

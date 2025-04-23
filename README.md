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
## Environment Variables Configuration

The following environment variables are required in your `.env` file:

| Variable             | Default Value            | Description                                                                 |
|----------------------|--------------------------|-----------------------------------------------------------------------------|
| `NODE_ENV`           | `development`            | Node.js environment (development/production)                                |
| `DB_HOST`            | `db`                     | Database host (matches Docker service name)                                 |
| `DB_USER`            | `postgres`               | Database username                                                           |
| `DB_PASSWORD`        | `postgres`               | Database password                                                           |
| `DB_NAME`            | `appdb`                  | Database name                                                               |
| `JWT_SECRET`         | `your_jwt_secret`        | Secret key for JWT token generation (change in production!)                 |
| `POSTGRES_USER`      | `postgres`               | PostgreSQL superuser (Docker container)                                     |
| `POSTGRES_PASSWORD`  | `postgres`               | PostgreSQL superuser password (Docker container)                            |
| `POSTGRES_DB`        | `appdb`                  | Default database created on startup (Docker container)                      |
| `ADMIN_USERNAME`     | `"saespibt"`             | Username for the default admin account                                     |
| `ADMIN_EMAIL`        | `"saespibt@gmail.com"`   | Email for the default admin account                                        |
| `ADMIN_PASSWORD`     | `"admin"`                | Password for the default admin account                                     |
| `BASIC_USERNAME`     | `"saespinosab"`          | Username for the default basic user account                                |
| `BASIC_EMAIL`        | `"saespinosab@gmail.com"`| Email for the default basic user account                                   |
| `BASIC_PASSWORD`     | `"basic"`                | Password for the default basic user account                                |

**Important Security Notes**:
1. Always change the default credentials before deploying to production
2. The `JWT_SECRET` should be a long, random string in production
3. Never commit your `.env` file to version control

## Production Build
```bash
  docker compose -f compose.yml build --target prod

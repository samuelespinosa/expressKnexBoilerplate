import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

// Create __dirname equivalent for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST ,
      user: process.env.DB_USER ,
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_NAME ,
      port: process.env.DB_PORT
    },
    migrations: {
      directory: path.join(__dirname, 'src/db/migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.join(__dirname, 'src/db/seeds')
    }
  }
};
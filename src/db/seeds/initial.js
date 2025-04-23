
import { hashPassword } from "../../utils/auth.js";
import 'dotenv/config';
export async function seed(knex) {
    await knex('users').del();
    
    // Inserts seed entries
    await knex('users').insert([
      {
        username: process.env.ADMIN_USERNAME,
        email: process.env.ADMIN_EMAIL,
        password_hash: await hashPassword(process.env.ADMIN_PASSWORD), // bcrypt hash for "password123"
        is_admin: true,
        created_at: new Date().toISOString()
      },
      {
        username: process.env.BASIC_USERNAME,
        email: process.env.BASIC_EMAIL,
        password_hash: await hashPassword(process.env.BASIC_PASSWORD), // bcrypt hash for "password456"
        created_at: new Date().toISOString()
      }
    ]);
  
}
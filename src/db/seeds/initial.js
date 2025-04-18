/**
 * Seed initial test data
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('posts').del();
    await knex('users').del();
  
    // Inserts seed entries
    await knex('users').insert([
      {
        username: 'admin',
        email: 'admin@example.com',
        password_hash: '$2a$10$fakehashforseeddata', // bcrypt hash for "password123"
        is_admin: true,
        created_at: new Date().toISOString()
      },
      {
        username: 'saespibt@gmail.com',
        email: 'john@example.com',
        password_hash: '$2a$10$fakehashforseeddata2', // bcrypt hash for "password456"
        created_at: new Date().toISOString()
      }
    ]);
  
}
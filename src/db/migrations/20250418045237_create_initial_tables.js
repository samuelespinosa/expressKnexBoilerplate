export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();  // Auto-incrementing primary key
    table.string('username').unique().notNullable(); // Add this line
    table.string('email').unique().notNullable();
    table.boolean('is_admin').defaultTo(false);
    table.string('password_hash').notNullable();
    table.timestamps(true, true);     // Adds `created_at` and `updated_at`
  });
};

export async function down(knex) {
  return knex.schema.dropTable('users');  // Rollback: deletes the table
};

import db from '../db/knexfile.js';

export default class User {
  static table = 'users';

  // Create a new user
  static async create({ email, password }) {
    const [user] = await db(this.table)
      .insert({ email, password })
      .returning('*');
    return user;
  }

  // Find user by email
  static async findByEmail(email) {
    return db(this.table).where({ email }).first();
  }

  // Find user by ID
  static async findById(id) {
    return db(this.table).where({ id }).first();
  }
}
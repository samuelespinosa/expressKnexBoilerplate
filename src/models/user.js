// src/models/user.js
import db from '../db/db.js';

export default class User {
  static table = 'users';

  static async create({ username, email, password_hash }) {
    const [user] = await db(User.table).insert({ username, email, password_hash }).returning('*');
    return user;
  }

  static async findByEmail(email) {
    return await db(User.table).where({ email }).first();
  }

  static async findByUserName(username) {
    return await db(User.table).where({ username }).first();
  }

  static async findById(id) {
    return await db(User.table).where({ id }).first();
  }
}

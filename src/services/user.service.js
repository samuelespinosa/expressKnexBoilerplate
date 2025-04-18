import {User} from '../models/index.js';
import { hashPassword, comparePassword } from '../utils/auth.js';

export default class UserService {
  // Register a new user
  static async register(email, password) {
    const existingUser = await User.findByEmail(email);
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await hashPassword(password);
    return User.create({ email, password: hashedPassword });
  }

  // Login user
  static async login(email, password) {
    const user = await User.findByEmail(email);
    if (!user || !(await comparePassword(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}
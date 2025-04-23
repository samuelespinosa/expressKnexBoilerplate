import {User} from '../models/index.js';
import { hashPassword, comparePassword } from '../utils/auth.js';
export default class UserService {
  // Register a new user
  static async register(username, email, password) {
    try {
      const [existingEmail, existingUserName] = await Promise.all([
        User.findByEmail(email),
        User.findByUserName(username)
      ]);

      if (existingUserName || existingEmail) {
        throw new Error('User already exists');
      }

      const password_hash = await hashPassword(password);
      const newUser = await User.create({ username, email, password_hash });
      return newUser;

    } catch (error) {
      console.error('Error in UserService.register:', error.message);
      throw error; 
    }
  }

  // Login user
  static async login(email, password) {
    try {
      const user = await User.findByEmail(email);

      if (!user || !(await comparePassword(password, user.password_hash))) {
        throw new Error('Invalid credentials');
      }

      return user;
      
    } catch (error) {
      console.error('Error in UserService.login:', error.message);
      throw error;
    }
  }
}

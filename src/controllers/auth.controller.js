import UserService from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const register = async (req, res) => {
  const {username, email, password } = req.body;

  try {
    const user = await UserService.register(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const {email, password } = req.body;

  try {
    const user = await UserService.login(email, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', user, token});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

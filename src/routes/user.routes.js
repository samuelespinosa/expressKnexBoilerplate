import express from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { getUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

// Apply JWT auth middleware to all routes
router.use(authenticate);

// GET /users/me
router.get('/me', getUser);

// PATCH /users/me
router.patch('/me', updateUser);

export default router;
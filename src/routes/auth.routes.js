import express from 'express';
import { validate } from 'express-validation';
import { login, register } from '../controllers/auth.controller.js';
import {registerSchema, loginSchema} from '../validators/index.js';
import { json } from 'stream/consumers';

const router = express.Router();

router.post('/register', validate(registerSchema), register);

// POST /auth/login
router.post('/login', validate(loginSchema), login);

export default router;
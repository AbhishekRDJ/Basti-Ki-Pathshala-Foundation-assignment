import express from 'express';
import login from '../controller/authController.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', login);

export default router;
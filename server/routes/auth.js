import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = express.Router();

// تسجيل الدخول
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = req.headers['authorization'];
  if (!token) {
      return res.status(403).json({ message: 'No token provided' });
  }
  
});

// التسجيل
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      role: role || 'user',
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user' });
  }
});

export default router;

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};

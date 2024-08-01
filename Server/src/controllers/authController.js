import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token, role: user.role });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export default { register, login };

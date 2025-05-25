// authController.js (ya koi bhi naam)
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// ✅ Signup Controller
export const Signup = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // ⚠️ Check if user already exists using `findOne`, not `find`
    const isUserExt = await User.findOne({ email });
    if (isUserExt) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ userName, email, password: hashedPassword });

    res.status(201).json({ message: 'User created', user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Login Controller
export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: { id: user._id, userName: user.userName, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

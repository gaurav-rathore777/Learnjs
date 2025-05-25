import express from 'express';
import { Signup, Login } from '../controllers/user.js'; // ✅ Correct path and import
import User from '../models/user.js'; // ✅ Correct path and import

const router = express.Router();

// ✅ Route for signup
router.post('/signup', Signup);
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', Login);

export default router;

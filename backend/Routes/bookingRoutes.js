import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// POST: Book tickets for multiple passengers
router.post('/bookings', async (req, res) => {
  const { userEmail, passengers } = req.body;

  if (!userEmail || !passengers || !passengers.length) {
    return res.status(400).json({ error: 'Missing userEmail or passengers' });
  }

  try {
    const booking = await Booking.create({ userEmail, passengers });
    res.status(201).json({
      message: 'Booking successful',
      passengers: booking.passengers, // 👈 Fix here
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:email', async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE passenger details
router.put('/:bookingId', async (req, res) => {
  const { passengers } = req.body;
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      { passengers },
      { new: true }
    );
    res.json({ message: 'Booking updated', updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;

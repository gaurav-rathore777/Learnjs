import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  seat: String,
});

const bookingSchema = new mongoose.Schema({
  userEmail: String,
  date: { type: Date, default: Date.now },
  passengers: [passengerSchema],
});

export default mongoose.model('Booking', bookingSchema);

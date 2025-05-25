import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Routes/routes.js'; // ✅ import router
import bookingRoutes from './Routes/bookingRoutes.js'


dotenv.config();
const app = express();
const port = 8000;
// const port = proce
console.log(process.env.MONGO_URI)

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Register routes
app.use('/api/auth', router);
app.use('/api', bookingRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

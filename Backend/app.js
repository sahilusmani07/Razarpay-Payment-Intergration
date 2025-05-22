import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/paymentRoute.js';
import dotenv from 'dotenv';

dotenv.config({ path: './Backend/config/config.env' });

const app = express();

app.use(cors());
app.use(express.json());   
app.use(express.urlencoded({ extended: true }));

app.use('/api', paymentRoutes);
app.use('/api/getkey', (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
});

export default app;

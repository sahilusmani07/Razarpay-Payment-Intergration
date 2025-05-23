import { app } from './app.js';
import Razorpay from 'razorpay';
import { connectDB } from './config/database.js';  
import dotenv from 'dotenv';

dotenv.config();

let instance;

(async () => {
  try {
    await connectDB();

    // Create and export the Razorpay instance
    instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    // Attach to app if needed  
    app.locals.razorpay = instance;

    app.listen(process.env.PORT, () => {
      console.log(` Server running on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.error(' Failed to start server:', err);
    process.exit(1);
  }
})();

export { instance };

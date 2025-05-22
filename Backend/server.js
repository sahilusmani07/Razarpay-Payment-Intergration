import dotenv from 'dotenv';
dotenv.config({ path: 'Backend/config/config.env' });

import Razorpay from 'razorpay';
import app from './app.js'; // Import app from app.js

// Initialize Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

//home route  
app.get('/', (req, res) => {
  res.send('Server is running');
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

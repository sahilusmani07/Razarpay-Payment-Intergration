import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../config/database.js";  
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.price * 100),
    currency: 'INR',
  };

  const order = await instance.orders.create(options);
  console.log(order);

  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerfication = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

   

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    // const payment = await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    //   amount: req.body.price,
      
    // });
    // console.log(payment);
    // res.status(200).json({
    //   success: true,
    //   signatureIsValid: isAuthentic,
    // });
    
    // Redirect to the success page with the reference ID
res.redirect(`http://localhost:5173/paymentSuccess?refference=${razorpay_payment_id}`);
   
    
  }
else{
 res.status(200).json({
    success: false,
    signatureIsValid: isValid,
  });
}
 
};

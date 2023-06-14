const Razorpay=require('razorpay')

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret:  process.env.RAZORPAY_API_SECRET,
})

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit (e.g., 50000 for INR 500.00)
    currency: 'INR',
  };

  try {
    const order = await instance.orders.create(options);
    // console.log(order)
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred during checkout.',
    });
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_payment_id} = req.body;
  const ord= await instance.payments.fetch(razorpay_payment_id)
  console.log('Razorpay Payment ID:', razorpay_payment_id);
  console.log(ord);
  // console.log('Razorpay Order ID:', razorpay_order_id);
  // console.log('Razorpay Signature:', razorpay_signature);
 res.status(200).json({
  success: true,
});
 
};

module.exports = {checkout, paymentVerification};

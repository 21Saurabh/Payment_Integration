import React,{useEffect,useState} from "react";
import person from "../assets/aboutperson.jpeg";
import {NavLink,useNavigate} from 'react-router-dom'
// import Razorpay from 'razorpay'
const Pay = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});

   const callAboutPage =async ()=>{
      try { 
        const res = await fetch('/api/pay',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })

        const data = await res.json();
        console.log("this is about of react",data)
        setUserdata(data);

        if(!res.status===200){
          const error = new error(res.error)
          throw error;
        }
      } catch (error) {
        navigate('/login')
      }
   }

  useEffect(() => {
      callAboutPage()
  }, []);
  
  const checkoutHandler= async (amount) =>{
    const resp = await fetch('/api/getkey',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    })
    const keyData = await resp.json();
    const {key}=keyData;
    const res = await fetch('/checkout',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
          amount
      })
    })
    
    const message = await res.json();
    
    const options = {
      key,
      amount:500000,
      currency: "INR",
      name: "Immortal",
      description: "Payment Integration",
      image: person,
      order_id: message.order,
      callback_url: "http://localhost:3000/paymentverification",
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#121212"
    }}
    const razor = await new window.Razorpay(options);
    // razor.on('payment.success', (response) => {
    //   const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
    //   fetch('/paymentverification', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       razorpay_payment_id,
    //       razorpay_order_id,
    //       razorpay_signature,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log('Payment verification response:', data);
    //       // Handle payment verification response
    //     })
    //     .catch((error) => {
    //       console.error('Error verifying payment:', error);
    //       // Handle error
    //     });
    // });

    razor.open();
   
    // console.log(razor)
    // console.log(message)
  }

  const amount = 5000
  return (
    <>
      <div className="conatiner">
        <form method="GET">
          <div className="row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="col-lg-4">
              <img src={person} alt="this is an img" />
            </div>
            <div className="col-lg-6">
              <div className="profile-head">
                <h5>{userdata.name}</h5>
                <h5>{userdata.email}</h5>           
              </div>
            </div>
          </div>
        </form>
        <br/>
        <div >{amount}</div>
        <br/>
        <button onClick={()=>checkoutHandler(amount)}>Pay</button>
      </div>
    </>
  );
};

export default Pay;
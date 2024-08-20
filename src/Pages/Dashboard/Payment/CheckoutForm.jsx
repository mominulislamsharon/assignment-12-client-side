import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
  const [error , setError] = useState();
  const [clientSecret, setClientSecret]  = useState('');
  const [transectionId, setTransectionId]= useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(() => {
    if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
 
    }
  },[axiosSecure, totalPrice])


  const handleSubmit = async(event) => {
    event.preventDefault();

    if(!stripe  || !elements){
      return
    }

    const card = elements.getElement(CardElement)
    if(card === null){
      return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      console.log("payment error", error);
      setError(error.message);
    }
    else{
      console.log('payment method', paymentMethod);
      setError('');
    }

    // confirm payment 

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
        }
      }
    })

    if(confirmError){
      console.log('confirm error')
    }
    else{
      console.log('paymentIntent',paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transection id', paymentIntent.id);
        setTransectionId(paymentIntent.id);

        const payment ={
          email: user.email,
          price: totalPrice,
          transectionId: paymentIntent.id,
          date: new Date(), 
          cartIds: cart.map(item => item._id), 
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }
        const res = await axiosSecure.post('/payments', payment);
        console.log('payment saved' ,res.data);
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Succesfull",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory')
        }
        
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
      >
      </CardElement>
      <button className="btn mt-8 btn-md bg-blue-500 text-white font-medium text-lg" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
      <p className="text-red-600">
      {error}
      </p>
      {transectionId && <p className="text-green-600">Your Transection id: {transectionId}</p>}
    </form>
  );
};

export default CheckoutForm;
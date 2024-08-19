import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add pulishabel key
const stripePromise = loadStripe(import.meta.env.VITE_Pyment_Gateway_PK)
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
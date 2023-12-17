import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { api } from './api/api'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const TransactionComplete = () => {
  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    const retrievePayment = async () => {
      try {
        const stripe = await stripePromise;
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );

        const { paymentIntent } = await stripe.retrievePaymentIntent(
          clientSecret
        );

        setPaymentMessage(paymentIntent.status);

        switch (paymentIntent.status) {
          case "succeeded":
            setPaymentMessage("Success! Payment received.");
            try {
              await api.put(`/invoice-paid/${clientSecret}`, {});
            } catch (e) {
              console.error(e);
            }
            break;

          case "processing":
            setPaymentMessage(
              "Payment processing. We'll update you when payment is received."
            );
            break;

          case "requires_payment_method":
            setPaymentMessage(
              "Payment failed. Please try another payment method."
            );
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            break;

          default:
            setPaymentMessage("Something went wrong.");
            break;
        }
      } catch (error) {
        console.error("Error retrieving payment:", error);
      }
    };

    retrievePayment();
  }, []);

  return (
    <div style={{ textAlign: "center", height: "100vh", backgroundColor: "red"}}>
      <h1>{paymentMessage}</h1>
    </div>
  );
};

export default TransactionComplete;

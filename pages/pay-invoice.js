import React from "react";
import MainPage from "../components/Dashboard/mainpage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { api } from './api/api'

import CheckoutForm from "../components/Payments/CheckoutForm";
import ClipLoader from "react-spinners/ClipLoader";
import Head from "next/head";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PayInvoice() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [invoice, setInvoice] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    let clientSecretFromApi = '';
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");

    const fetching = async () => {
      const response = await api.get(`/invoice/${id}`);
      setInvoice(response.data);

      const payment = await api.post(
        "/payment/create-payment-intent",
        {
          items: [
            {
              id: response.data._id,
              service: response.data.service,
              amount: response.data.amount,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);

      if (typeof payment.data.clientSecret == 'undefined') {
        return () => {
          console.log('Operation stopped. Check if client secret from payment-intention keys are setted correctly.')
        };
      }

      clientSecretFromApi = payment.data.clientSecret;
      setClientSecret(clientSecretFromApi);

      try {
        await api.put(`/invoice/${id}`, {
          paymentId: clientSecretFromApi,
        });
      } catch (error) {
        alert("error");
      }
    };

    fetching();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Head>
        <title>Pay invoice</title>
      </Head>
      <MainPage className="main-page-container">
        {loading ? (
          <div className="pay-invoice-loading-container">
            <ClipLoader color="#488d7f" />
          </div>
        ) : (
          <div>
            <h3 className="total-invoice-title">
              Total invoice amount: ${invoice.amount}
            </h3>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        )}
      </MainPage>
    </>
  );
}

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe(
  "{PUBLIC-KEY}"
);
const Payment = () => {
  return (
    <Elements stripe={stripe}>
      ...
    </Elements>
  );
};
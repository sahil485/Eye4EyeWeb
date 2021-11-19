import React, { useState, useContext } from "react";
import StripeCheckout from "react-stripe-checkout"; 
import { AppContext } from "../../Context";


export const Payment = () => {

  const { items } = useContext(AppContext)

  const [product] = useState({
    name: "shirt", price: "8"
  })

  const handleToken = (token, addresses) =>
  {
    console.log({ token, addresses })
  }
  
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <StripeCheckout 
      stripeKey = "pk_test_51JrObzJR8mGEvzw8NUyjyGnDRZo6nRflt0hBNtGYTWR5X2NmYtKUBLRsMEFHSDgGai0VDeREZDoA7oByiFsp5Xca00DoyLr00B"
      token = {handleToken} 
      />
    </div>
  );
};
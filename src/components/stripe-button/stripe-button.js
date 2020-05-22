import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("paid successfully");
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      amount={priceForStripe}
      token={onToken}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;

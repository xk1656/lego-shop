import React from "react";
import "./payment-method.styles.scss";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";
import { ReactComponent as Visa } from "../../assets/visa.svg";
import { ReactComponent as AmericanExpress } from "../../assets/american-express.svg";
import { ReactComponent as MasterCard } from "../../assets/mastercard.svg";

const PaymentMethod = () => (
  <div className="payment-method">
    <Paypal />
    <Visa />
    <MasterCard />
    <AmericanExpress />
  </div>
);

export default PaymentMethod;

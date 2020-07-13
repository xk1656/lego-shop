import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { price, name, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="quantity">Qty: {quantity}</span>
      <span className="price">Total: {(quantity * price).toFixed(2)}</span>
    </div>
  </div>
);

export default CartItem;

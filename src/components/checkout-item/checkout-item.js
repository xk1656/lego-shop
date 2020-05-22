import React from "react";
import "./checkout-item.styles.scss";
import { ReactComponent as RemoveIcon } from "../../assets/removeIcon.svg";
import { ReactComponent as WishIcon } from "../../assets/wishIcon.svg";
import { ReactComponent as Decrease } from "../../assets/decrease.svg";
import { ReactComponent as Increase } from "../../assets/increase.svg";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="decrease" onClick={() => removeItem(cartItem)}>
          <Decrease />
        </div>
        <div className="item_quantity">
          <span>{quantity}</span>
        </div>
        <div className="increase" onClick={() => addItem(cartItem)}>
          <Increase />
        </div>
      </div>
      <div className="icon-line">
        <RemoveIcon className="icon" onClick={() => clearItem(cartItem)} />
        <WishIcon className="icon" />
      </div>
      <div className="price">{(price * quantity).toFixed(2)}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

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
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  DecreaseContainer,
  IncreaseContainer,
  ItemQuantityContainer,
  IconLineContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"></img>
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <DecreaseContainer onClick={() => removeItem(cartItem)}>
          <Decrease />
        </DecreaseContainer>
        <ItemQuantityContainer>
          <span>{quantity}</span>
        </ItemQuantityContainer>
        <IncreaseContainer onClick={() => addItem(cartItem)}>
          <Increase />
        </IncreaseContainer>
      </QuantityContainer>
      <IconLineContainer>
        <RemoveIcon className="icon" onClick={() => clearItem(cartItem)} />
        <WishIcon className="icon" />
      </IconLineContainer>
      <PriceContainer>{(price * quantity).toFixed(2)}</PriceContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

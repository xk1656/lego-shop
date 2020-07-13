import React from "react";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  Logo,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  NameContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <Logo>
      <LogoContainer to="/"></LogoContainer>
    </Logo>
    <OptionsContainer>
      {currentUser ? (
        <NameContainer>Hello! {currentUser.displayName}</NameContainer>
      ) : null}
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => signOutStart()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/sign-in">
          Sign In
        </OptionLink>
      )}
      <CartIcon className="option" />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from "react";
import FormInput from "../form-input/form-input";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    const { signUpStart } = this.props;
    signUpStart({ email, password, displayName });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

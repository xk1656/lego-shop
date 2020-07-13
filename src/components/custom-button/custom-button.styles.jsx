import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: rgb(253, 128, 36);
  color: rgb(0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgb(253, 128, 36);
`;

const googleSignInStyles = css`
  background-color: #009cde;
  border-color: #009cde;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: none;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    filter: brightness(0.95);
    background-color: #009cde;
    color: #fff;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 2px solid rgb(253, 128, 36);

  &:hover {
    background-color: rgb(253, 128, 36);
    color: rgb(0, 0, 0);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  border-collapse: collapse;
  text-align: center;
  font-size: 1rem;
  width: auto;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
  }

  ${getButtonStyles}
`;

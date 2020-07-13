import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  background-color: rgb(255, 207, 0);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Logo = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  margin-left: 1rem;
  background-image: url(https://www.lego.com/cdn/cs/set/assets/blt6d3f7d252a252a42/LEGO-Logo-Ani2b.gif);
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  margin-right: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const NameContainer = styled.div`
  padding: 10px 15px;
  margin-right: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

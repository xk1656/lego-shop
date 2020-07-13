import styled, { css } from "styled-components";

const decreaseAndIncrease = css`
  position: relative;
  cursor: pointer;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  -webkit-box-pack: center;
  justify-content: center;
  touch-action: manipulation;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  border-image: initial;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled.div`
  width: 20%;
`;
export const PriceContainer = styled.div`
  width: 20%;
  text-align: right;
`;

export const QuantityContainer = styled.div`
  width: 20%;
  display: flex;
  height: 2.7rem;
  border-radius: 5px;
  flex: 1 1 0%;
`;

export const DecreaseContainer = styled.div`
  ${decreaseAndIncrease};
  border-radius: 5px 0px 0px 5px;
`;

export const IncreaseContainer = styled.div`
  ${decreaseAndIncrease};
  border-radius: 0px 5px 5px 0px;
`;

export const ItemQuantityContainer = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 2.5rem;
  border-top: thin solid rgb(224, 224, 224);
  border-bottom: thin solid rgb(224, 224, 224);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const IconLineContainer = styled.div`
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-right: 0px;
  width: auto;
  max-width: 12rem;
  padding: 0px 30px;
  flex: 1 1 0%;
  display: flex;

  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

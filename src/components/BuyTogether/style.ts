import styled from "styled-components";
import {
  ContainerCard,
  ContainerIMG,
  ProductTitle,
  ProductPrice,
} from "../ProductCard/styles";
import Colors from "../../Colors/Colors";

export const ContainerBuyTogether = styled(ContainerCard)`
  width: 551px;
  height: 457px;
  position: relative;
  background: ${Colors.CorFundoIMG};
  @media (max-width: 800px) {
    position: relative;
    width: 333px;
    height: 328px;
    background: ${Colors.CorFundoIMG};
  }
`;

export const IMGBuyTogether = styled(ContainerIMG)`
  height: 256px;
  > img:first-child {
    width: 362px;
    height: 256px;
    margin-top: 36px;
    margin-bottom: 10px;
  }
  > img:nth-child(2) {
    width: 179px;
    height: 175px;
    object-fit: contain;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media (max-width: 800px) {
    > img:nth-child(2) {
      width: 102px;
      height: 102px;
      right: 40px;
    }
    > img:first-child {
      width: 190px;
      height: 150px;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    height: 123.86px;
  }
`;

export const PriceBuyTogether = styled(ProductPrice)`
  > p {
    text-align: center;
  }
`;

export const TitleBuyTogether = styled(ProductTitle)`
  > p {
    text-align: center;
    height: 42px;
  }
`;

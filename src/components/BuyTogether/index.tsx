import React, { FC } from "react";
import { BuyButton } from "../ProductCard/styles";
import {
  ContainerBuyTogether,
  PriceBuyTogether,
  TitleBuyTogether,
  IMGBuyTogether,
} from "./style";
import toReal from "../../helps/currency";
import { BuyTogetherType } from "./BuyTogether.type";
import { Container } from "../../GenericStyles/GenericStyles";

const BuyTogether: FC<BuyTogetherType> = (props) => {
  const { Product1, Product2 } = props;
  return (
    <ContainerBuyTogether>
      <IMGBuyTogether>
        <img
          src={`${Product1?.Thumbnail_Product}`}
          alt={`Imagem do produto ${Product1?.Title_Product}`}
        />
        <img
          src={`${Product2?.Thumbnail_Product}`}
          alt={`Imagem do produto ${Product2?.Title_Product}`}
        />
      </IMGBuyTogether>
      <TitleBuyTogether>
        <p>
          {Product1?.Title_Product} + <br /> {Product2?.Title_Product}
        </p>
      </TitleBuyTogether>
      <PriceBuyTogether>
        <p>{toReal(Product1?.ListPrice_Product + Product2?.ListPrice_Product)}</p>
        <p>{toReal(Product1?.SalePrice_Product + Product2?.SalePrice_Product)}</p>
      </PriceBuyTogether>
      <Container>
        <BuyButton>Comprar</BuyButton>
      </Container>
    </ContainerBuyTogether>
  );
};

export default BuyTogether;

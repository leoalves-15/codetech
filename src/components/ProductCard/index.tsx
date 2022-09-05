import React, { FC } from "react";
import {
  ContainerCard,
  ContainerIMG,
  ProductTitle,
  ProductPrice,
  BuyButton,
} from "./styles";
import { ProductCardType } from "./ProductCard.type";
import toReal from "../../helps/currency";
import { Container } from "../../GenericStyles/GenericStyles";

const ProductCard: FC<ProductCardType> = (props) => {
  const {
    Thumbnail_Product,
    Title_Product,
    SalePrice_Product,
    ListPrice_Product,
    Avaliation_Product,
    id,
  } = props;
  return (
    <ContainerCard>
      <ContainerIMG>
        <img
          src={`${Thumbnail_Product}`}
          alt={`Imagem do produto ${Title_Product}`}
        />
      </ContainerIMG>
      <ProductTitle>
        <p>{Title_Product}</p>
      </ProductTitle>
      <ProductPrice>
        <p>{toReal(ListPrice_Product)}</p>
        <p>{toReal(SalePrice_Product)}</p>
      </ProductPrice>
      <Container>
        <BuyButton>Comprar</BuyButton>
      </Container>
    </ContainerCard>
  );
};

export default ProductCard;

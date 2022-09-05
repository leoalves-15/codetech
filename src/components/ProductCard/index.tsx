import React, { FC } from "react";
import {
  ContainerCard,
  ContainerIMG,
  ProductTitle,
  ProductPrice,
  BuyButton,
  Avaliation
} from "./styles";
import { useDispatch } from "react-redux";
import addCart from "../../store/Actions/addCart";
import { ProductCardType } from "./ProductCard.type";
import toReal from "../../helps/currency";
import StarFull from "../../assets/StarFull.svg";
import StarLess from "../../assets/StarLess.svg";
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
  const starts = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
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
      <Avaliation>
      {starts.map((item, idex) => (
        <>
          {idex < Math.round(Avaliation_Product) ? (
            <>
              <img src={StarFull} alt="" />
            </>
          ) : (
            <>
              <img src={StarLess} alt="" />
            </>
          )}
        </>
      ))}
      <p> ({Avaliation_Product})</p>
      </Avaliation>    
      <ProductPrice>
        <p>{toReal(ListPrice_Product)}</p>
        <p>{toReal(SalePrice_Product)}</p>
      </ProductPrice>
      <Container>
        <BuyButton
          onClick={() => {
            dispatch(addCart({ id, qtd: 1 }));
          }}
        >
          Comprar
        </BuyButton>
      </Container>
    </ContainerCard>
  );
};

export default ProductCard;

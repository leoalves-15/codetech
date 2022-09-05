import React, { FC } from "react";
import { ItemCartType } from "./itemcart.type";
import { ContainCartItem, ProductImage } from "./styles";
import toReal from "../../../../helps/currency";
import { ProductPrice, ProductTitle } from "../../../ProductCard/styles";

const CartItem: FC<ItemCartType> = (props) => {
  const { img, title, salePrice, listPice, qtd } = props;

  return (
    <ContainCartItem>
      <ProductImage src={img} alt={`Imagem do produto ${title}`} />
      <div>
        <ProductTitle>
          <p>
            {title} ({qtd} un)
          </p>
        </ProductTitle>
        <ProductPrice>
          <p>{toReal(listPice)}</p>
          <p>{toReal(salePrice)}</p>
          <p>Total: {toReal(salePrice * qtd)}</p>
        </ProductPrice>
      </div>
    </ContainCartItem>
  );
};

export default CartItem;

import React, { FC, useEffect, useState, ReactNode } from "react";
import { ProductShowCaseProps } from "./ProductShowCase.type";
import {
  ContainCards,
  ContanerShowCase,
  TitleShowCase,
  ContainCardsB,
} from "./styles";
import { getProducts } from "../../utils/services/getProducts";
import ProductCard from "../ProductCard";
import { ProductCardType } from "../ProductCard/ProductCard.type";

const ProductShowCase: FC<ProductShowCaseProps> = (props) => {
  const { title, productQtd, bg = false } = props;
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [showProducts, setShowProducts] = useState<ReactNode[]>([]);

  useEffect(() => {
    const load = async () => {
      setProducts(await getProducts());
    };
    load();
  }, []);

  useEffect(() => {
    const showProductsAux = products?.map(
      (product: ProductCardType, index: number) => {
        return (
          <>
            {index < productQtd && (
              <ProductCard key={product.id} {...product} />
            )}
          </>
        );
      }
    );
    setShowProducts(showProductsAux);
  }, [products]);

  return (
    <ContanerShowCase bg={bg}>
      <TitleShowCase>{title}</TitleShowCase>

      {productQtd > 2 ? (
        <ContainCards>{showProducts}</ContainCards>
      ) : (
        <ContainCardsB>{showProducts}</ContainCardsB>
      )}
    </ContanerShowCase>
  );
};

export default ProductShowCase;

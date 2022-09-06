import React, { FC, useEffect, useState } from "react";
import BuyTogether from "../BuyTogether";
import { useScreen } from "../../hooks/use-screen";
import ProductShowCase from "../ProductShowCase";
import { getProduct } from "../../utils/services/getProduct";
import { ContainerBTShowCase, ShowMore, ContainerBTN } from "./styles";
import { TitleShowCase } from "../../components/ProductShowCase/styles";
import { BuyTogetherType } from "./BuyTogether.type";
import ProductI from "./initialProduct";

const BuyTogetherShowCase: FC<BuyTogetherType> = (props) => {
  const { title } = props;
  const [product1, setProduct1] = useState(ProductI);
  const [product2, setProduct2] = useState(ProductI);

  useEffect(() => {
    const load = async () => {
      setProduct1(await getProduct(1));
      setProduct2(await getProduct(7));
    };
    load();
  }, []);

  const { isMobile } = useScreen();

  return (
    <div>
      <TitleShowCase>{title}</TitleShowCase>
      <ContainerBTShowCase>
        <BuyTogether Product1={product1} Product2={product2} />
        {!isMobile && <ProductShowCase productQtd={2} />}
      </ContainerBTShowCase>
      {!isMobile && (
        <ContainerBTN>
          <ShowMore>Veja mais produtos</ShowMore>
        </ContainerBTN>
      )}
    </div>
  );
};

export default BuyTogetherShowCase;

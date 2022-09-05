import React, { FC } from "react";
import BuyTogether from "../BuyTogether";
import { useScreen } from "../../hooks/use-screen";
import ProductShowCase from "../ProductShowCase";
import { getProduct } from "../../utils/services/getProduct";
import { ContainerBTShowCase } from "./styles";
import { TitleShowCase } from "../../components/ProductShowCase/styles";
import { BuyTogetherType } from "./BuyTogether.type";

const product1 = await getProduct(1);
const product2 = await getProduct(7);

const BuyTogetherShowCase: FC<BuyTogetherType> = (props) => {
  const { title } = props;
  const { isMobile } = useScreen();

  return (
    <div>
      <TitleShowCase>{title}</TitleShowCase>
      <ContainerBTShowCase>
        <BuyTogether Product1={product1} Product2={product2} />
        {!isMobile && <ProductShowCase productQtd={2} />}
      </ContainerBTShowCase>
    </div>
  );
};

export default BuyTogetherShowCase;

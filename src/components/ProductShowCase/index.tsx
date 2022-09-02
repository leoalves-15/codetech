import React, {FC, useEffect, useState} from "react";
import {ProductShowCaseProps} from './ProductShowCase.type'
import {ContainCards, ContanerShowCase, TitleShowCase} from './styles'
import {getProducts} from "../../utils/services/getProduct";
import ProductCard from "../ProductCard";
import {ProductCardType} from '../ProductCard/ProductCard.type';
import BuyTogether from '../BuyTogether'

const response = await getProducts();

const ProductShowCase: FC<ProductShowCaseProps> = (props) => {
    const {title, productQtd} = props;
    const [products, setProducts] =  useState<ProductCardType[]>([]);

    useEffect(() => {
        setProducts(response);
    }, []);
    
    return (
        <ContanerShowCase>
            <BuyTogether Product1={products[0]} Product2={products[4]}/>
            <TitleShowCase>{title}</TitleShowCase>
            <ContainCards>
            {products?.map((product: ProductCardType, index: number) => {
                return(
                    <>
                        {productQtd > index && (
                            <ProductCard key={product.id} {...product}/>
                        )}
                    </>
                )
            })}
        </ContainCards>
        </ContanerShowCase>
    );
}

export default ProductShowCase;
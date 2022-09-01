import React, {FC} from "react";
import {ContainerCard, ContainerIMG, ProductTitle, ProductPrice, BuyButton} from './styles';
import {ProductCardProps} from './ProductCard.type'
import {Container} from '../../GenericStyles/GenericStyles'

const ProductCard: FC<ProductCardProps> = (props) => {
    const {img, title, salePrice, listPrice, avaliation} = props;
    return (
        <ContainerCard>
            <ContainerIMG>
                <img src={`${img}`} alt={`Imagem do produto ${title}`} />
            </ContainerIMG>
            <ProductTitle>
                <p>
                    {title}
                </p>
            </ProductTitle>
            <ProductPrice>
                <p>R$ {listPrice}</p>
                <p>R$ {salePrice}</p>
            </ProductPrice>
            <Container>
                <BuyButton>
                    Comprar
                </BuyButton>
            </Container>
        </ContainerCard>
    );
}

export default ProductCard;
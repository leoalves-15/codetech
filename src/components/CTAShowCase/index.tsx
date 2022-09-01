import React from "react";
import {ContainerCTACase} from './styles';
import cards from '../../assets/Group 1912.svg';
import boleto from '../../assets/Grupo 276.svg';
import pix from '../../assets/ic_baseline-pix.svg';
import trunk from '../../assets/carbon_delivery.svg';
import fast from '../../assets/Vector.svg';
import CTACard from "../CTACard";

const CTAS = [
    {
        id: 1,
        img: cards,
        title: 'PAGAMENTO COM DOIS CARTÕES'
    },
    {
        id: 2,
        img: boleto,
        title: 'ATÉ 10% OFF NO BOLETO'
    },
    {
        id: 3,
        img: pix,
        title: 'ATÉ 15% OFF NO PIX'
    },
    {
        id: 4,
        img: trunk,
        title: 'FRETE GRÁTIS'
    },
    {
        id: 5,
        img: fast,
        title: 'ENTREGA EXPRESSA'
    }
]

const CTAShowCase = () => {
    return (
        <ContainerCTACase>
            {CTAS?.map((cta) => {
                return(
                    <>
                        <CTACard key={cta.id} Img={cta.img} Title={cta.title}/>
                    </>
                )
            })}
        </ContainerCTACase>
    );
}

export default CTAShowCase;
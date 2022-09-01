import React, {FC} from "react";
import {CTACardProps} from './cta.types';
import {ContainerCTACard, CTATitle} from './styles';

const CTACard: FC<CTACardProps> = (props) => {
    const {Img, Title} = props;
    return (
        <ContainerCTACard>
            <img src={Img} alt={Title} />
            <CTATitle>{Title}</CTATitle>
        </ContainerCTACard>
    );
}

export default CTACard;
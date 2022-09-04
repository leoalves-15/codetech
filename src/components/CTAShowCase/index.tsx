import React from "react";
import CTACard from "./components/CTACard";
import {ContainerCTACase} from './styles';
import {CTAS} from './ctas';

const CTAShowCase = () => {
    return (
        <ContainerCTACase>
            {CTAS?.map((cta) => {
                return(
                        <CTACard key={cta.id} Img={cta.img} Title={cta.title}/>
                )
            })}
        </ContainerCTACase>
    );
}

export default CTAShowCase;
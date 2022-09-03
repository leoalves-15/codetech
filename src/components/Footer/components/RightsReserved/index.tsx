import React, {FC} from "react";
import {ContainerRightsReserved} from './styles'
import {RightsReservedType} from "./RightsResered.types";

const RightsReserved: FC<RightsReservedType> = (props) => {
    const {Text = ''} = props;
    return (
        <ContainerRightsReserved>
            <p>{Text}</p>
        </ContainerRightsReserved>
    );
}

export default RightsReserved;
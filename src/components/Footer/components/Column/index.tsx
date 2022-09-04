import React, {FC} from "react";
import {ContainerColumn, Item} from "./styles";
import {ColumnType} from "./column.type";

const Column: FC<ColumnType> = (props) => {
    const {links = []} = props;

    return (
        <ContainerColumn>
            {links?.map((item) => 
                (
                  <Item key={item.label}>
                    <a target="_blank" href={item.link}>{item.label}</a>
                  </Item>  
                ))}
        </ContainerColumn>
    );
}

export default Column;
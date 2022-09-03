import React, {useState, useEffect, FC} from "react";
import {CategoryType} from './category.type';
import {CategoryContainer, CircleImg, CatgeoryTitle} from './styles';

const CategoryCard: FC<CategoryType> = (props) => {
    const {img, title, link} = props;

    return (
        <CategoryContainer>
            <CircleImg>
                <img src={img} alt="" />
            </CircleImg>
            <CatgeoryTitle>{title}</CatgeoryTitle>
        </CategoryContainer>
    );
}

export default CategoryCard;
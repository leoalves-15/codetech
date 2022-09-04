import React from "react";
import { ContainerShowCase } from "./styles";
import { Categories } from "./categories";
import CategoryCard from "../CategoryCard";
import {useScreen} from "../../hooks/use-screen";
import Slider from "../Slider";

const ShowCategories = Categories?.map((category) => {
  return (
    <CategoryCard
      key={category.id}
      link={category.link}
      img={category.img}
      title={category.title}
    />
  );
});

const CategoryShowCase = () => {
  const {isMobile} = useScreen();

  return (
    <ContainerShowCase>
      {!isMobile ? <>{ShowCategories}</> : <> <Slider resources={ShowCategories}/></>}
    </ContainerShowCase>
  );
};

export default CategoryShowCase;

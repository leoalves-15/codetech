import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryCard from ".";

export default {
  title: "Components/CategoryCard",
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

export const Primary: ComponentStory<typeof CategoryCard> = () => (
  <CategoryCard title="Fone de ouvido" img="https://www.pngall.com/wp-content/uploads/4/Wireless-Headphone-PNG-HD-Quality.png" link="teste"/>
);

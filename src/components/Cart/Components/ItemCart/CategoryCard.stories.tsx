import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartItem from ".";

export default {
  title: "Components/CartItem",
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

export const Primary: ComponentStory<typeof CartItem> = () => (
  <CartItem listPice={600} qtd={2} salePrice={500.05}  title="Fone de ouvido" img="https://www.pngall.com/wp-content/uploads/4/Wireless-Headphone-PNG-HD-Quality.png"/>
);

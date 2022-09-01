import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductCard from '.';
import'../../assets/fonts/Inter-3.19/InterWeb/inter.css'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

export const Primary: ComponentStory<typeof ProductCard> = () => 
<ProductCard 
  Avaliation_Product={4.6}
  id={1}
  ListPrice_Product={550.40}
  SalePrice_Product={500.00}
  Title_Product="Notebook VAIO® FE15 Intel® Core™ i7
  Windows 11 Home 8GB 512GB SSD 
  Full HD - Prata"
  Thumbnail_Product="https://images-americanas.b2w.io/produtos/5532628624/imagens/notebook-samsung-book-np550xda-kt2br-intel-core-i3-4gb-1tb-15-6-full-hd-led-win11/5532628624_1_large.jpg" 
/>;
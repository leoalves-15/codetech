import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CTACard from '.';
import MyImageSvg from '../../assets/carbon_delivery.svg';
import'../../assets/fonts/Inter-3.19/InterWeb/inter.css'

export default {
  title: 'Components/CTACard',
  component: CTACard,
} as ComponentMeta<typeof CTACard>;

export const Primary: ComponentStory<typeof CTACard> = () => 
<CTACard Title='teste' Img={MyImageSvg}/>;
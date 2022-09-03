import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CTACard from '.';

export default {
  title: 'Components/CTACard',
  component: CTACard,
} as ComponentMeta<typeof CTACard>;

export const Primary: ComponentStory<typeof CTACard> = () => 
<CTACard Title='teste' Img={'https://m.media-amazon.com/images/I/41NqUMUFHjL._AC_SL1000_.jpg'}/>;
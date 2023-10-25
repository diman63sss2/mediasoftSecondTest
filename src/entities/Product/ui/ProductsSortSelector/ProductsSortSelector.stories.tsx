import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductsSortSelector } from './ProductsSortSelector';

export default {
    title: 'shared/ProductsSortSelector',
    component: ProductsSortSelector,
} as ComponentMeta<typeof ProductsSortSelector>;

const Template: ComponentStory<typeof ProductsSortSelector> = (args) => <ProductsSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

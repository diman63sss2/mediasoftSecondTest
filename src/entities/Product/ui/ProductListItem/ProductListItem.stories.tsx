import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductListItem } from './ProductListItem';
import { Product } from '../../model/types/product';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
    title: 'entities/ProductListItem',
    component: ProductListItem,
} as ComponentMeta<typeof ProductListItem>;

const Template: ComponentStory<typeof ProductListItem> = (args) => <ProductListItem {...args} />;

const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
    isLoading: false,
} as Product;

export const Normal = Template.bind({});
Normal.args = {
    product,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    product,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

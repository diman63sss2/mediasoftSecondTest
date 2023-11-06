import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProductList } from './ProductList';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { Product } from '../../model/types/product';

export default {
    title: 'entities/Product/ProductList',
    component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList {...args} />;

const products = [{
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
    isLoading: false,
},
{
    id: 2,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
    isLoading: false,
},
{
    id: 3,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
    isLoading: false,
}];

export const Normal = Template.bind({});
Normal.args = {
    products,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    products,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {
    products,
    isLoading: true,
};
LoadingNormal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    products,
    isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

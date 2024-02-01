import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProductPagePagination } from './ProductPagePagination';

export default {
    title: 'pages/ProductPagePagination',
    component: ProductPagePagination,
} as ComponentMeta<typeof ProductPagePagination>;

const Template: ComponentStory<typeof ProductPagePagination> = (args) => <ProductPagePagination {...args} />;
const args = {
    productsLimit: 12,
    productsCount: 42,
    currentPage: 2,
};
export const Normal = Template.bind({});
Normal.args = args;

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

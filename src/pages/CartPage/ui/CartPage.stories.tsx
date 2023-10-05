import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import CartPage from './CartPage';

export default {
    title: 'pages/CartPage',
    component: CartPage,
} as ComponentMeta<typeof CartPage>;

const Template: ComponentStory<typeof CartPage> = () => <CartPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

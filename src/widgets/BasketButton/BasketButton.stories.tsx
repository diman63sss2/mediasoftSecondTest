import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BasketButton } from './BasketButton';
import { StoreDecorator } from '../../shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/BasketButton',
    component: BasketButton,
} as ComponentMeta<typeof BasketButton>;

const Template: ComponentStory<typeof BasketButton> = () => <BasketButton />;

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [StoreDecorator({
    user: {
        productsCount: 10,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        productsCount: 10,
    },
})];

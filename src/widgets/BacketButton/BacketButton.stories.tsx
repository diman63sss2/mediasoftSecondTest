import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BacketButton } from './BacketButton';
import { StoreDecorator } from '../../shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/BacketButton',
    component: BacketButton,
} as ComponentMeta<typeof BacketButton>;

const Template: ComponentStory<typeof BacketButton> = () => <BacketButton />;

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

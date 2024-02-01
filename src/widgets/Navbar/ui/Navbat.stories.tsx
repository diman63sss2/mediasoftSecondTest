import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {
        authData: {},
    },
})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {},
    },
})];

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BurgerButton } from './BurgerButton';

export default {
    title: 'shared/BurgerButton',
    component: BurgerButton,
} as ComponentMeta<typeof BurgerButton>;

const Template: ComponentStory<typeof BurgerButton> = (args) => <BurgerButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

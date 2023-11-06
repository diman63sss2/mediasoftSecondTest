import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PrimaryDark } from 'shared/ui/AppLink/AppLink.stories';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <Text title="test" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="test" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

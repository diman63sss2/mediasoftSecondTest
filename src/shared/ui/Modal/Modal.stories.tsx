import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Vestibulum lectus mauris ultrices eros in cursus. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Egestas dui id ornare arcu odio ut sem nulla. Euismod quis viverra nibh cras. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Enim ut tellus elementum sagittis vitae. Urna nec tincidunt praesent semper. Volutpat commodo sed egestas egestas fringilla phasellus.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Vestibulum lectus mauris ultrices eros in cursus. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Egestas dui id ornare arcu odio ut sem nulla. Euismod quis viverra nibh cras. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Enim ut tellus elementum sagittis vitae. Urna nec tincidunt praesent semper. Volutpat commodo sed egestas egestas fringilla phasellus.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

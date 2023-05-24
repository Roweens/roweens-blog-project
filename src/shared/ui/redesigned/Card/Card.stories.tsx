import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/redesigned/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text text="text" title="test" />,
    variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
    children: <Text text="text" title="test" />,
    variant: 'light',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text text="text" title="test" />,
    variant: 'outlined',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: <Text text="text" title="test" />,
    variant: 'outlined',
    fullWidth: true,
};

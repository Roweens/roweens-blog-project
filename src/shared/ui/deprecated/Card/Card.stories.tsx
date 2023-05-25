import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

export default {
    title: 'shared/deprecated/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.NORMAL,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.OUTLINED,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.NORMAL,
    fullWidth: true,
};

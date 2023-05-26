import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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

export const NormalDark = Template.bind({});
NormalDark.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.NORMAL,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalRed = Template.bind({});
NormalRed.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.NORMAL,
};
NormalRed.decorators = [ThemeDecorator(Theme.RED)];

export const OutlinedRed = Template.bind({});
OutlinedRed.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.OUTLINED,
};
OutlinedRed.decorators = [ThemeDecorator(Theme.RED)];

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: <Text text="text" title="test" />,
    theme: CardTheme.NORMAL,
    fullWidth: true,
};

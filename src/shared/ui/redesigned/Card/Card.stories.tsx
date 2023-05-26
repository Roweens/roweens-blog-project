import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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

export const NormalDark = Template.bind({});
NormalDark.args = {
    children: <Text text="text" title="test" />,
    variant: 'dark',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalRed = Template.bind({});
NormalRed.args = {
    children: <Text text="text" title="test" />,
    variant: 'dark',
};
NormalRed.decorators = [ThemeDecorator(Theme.RED)];

export const NormalRound = Template.bind({});
NormalRound.args = {
    children: <Text text="text" title="test" />,
    variant: 'dark',
    border: 'round',
};

export const NormalIntermediate = Template.bind({});
NormalIntermediate.args = {
    children: <Text text="text" title="test" />,
    variant: 'dark',
    border: 'intermediate',
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

export const FullHeight = Template.bind({});
FullHeight.args = {
    children: <Text text="text" title="test" />,
    variant: 'outlined',
    fullHeight: true,
};

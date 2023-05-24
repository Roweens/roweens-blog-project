import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    variant: 'error',
};

export const Accent = Template.bind({});
Accent.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    variant: 'accent',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title test',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text test test test test test test test test',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title test',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text test test test test test test test test',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleRed = Template.bind({});
OnlyTitleRed.args = {
    title: 'Title test',
};
OnlyTitleRed.decorators = [ThemeDecorator(Theme.RED)];

export const OnlyTextRed = Template.bind({});
OnlyTextRed.args = {
    text: 'Text test test test test test test test test',
};
OnlyTextRed.decorators = [ThemeDecorator(Theme.RED)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    size: 's',
};

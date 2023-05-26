import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/TextField',
    component: TextField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
    <TextField {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true,
};

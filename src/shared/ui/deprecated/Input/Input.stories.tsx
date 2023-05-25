import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Input',
    component: Input,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    placeholder: 'Type Text',
    value: '123123',
};

export const Readonly = Template.bind({});

Readonly.args = {
    placeholder: 'Type Text',
    value: '123123',
    readonly: true,
};

export const Dark = Template.bind({});

Dark.args = {
    placeholder: 'Type Text',
    value: '123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});

Red.args = {
    placeholder: 'Type Text',
    value: '123123',
};

Dark.decorators = [ThemeDecorator(Theme.RED)];

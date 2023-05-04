import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/LoginForm',
    component: LoginForm,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({ loginForm: { username: '123', password: '123123' } }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123123', error: 'Some error' },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: '123', password: '123123' } }),
];

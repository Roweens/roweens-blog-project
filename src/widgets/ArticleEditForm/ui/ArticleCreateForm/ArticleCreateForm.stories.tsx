import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateForm } from './ArticleCreateForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/ArticleCreateBlock/ArticleCreateForm',
    component: ArticleCreateForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateForm>;

const Template: ComponentStory<typeof ArticleCreateForm> = (args) => (
    <ArticleCreateForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

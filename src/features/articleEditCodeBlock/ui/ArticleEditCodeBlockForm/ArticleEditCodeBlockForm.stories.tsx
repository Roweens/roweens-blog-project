import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditCodeBlockForm } from './ArticleEditCodeBlockForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleEditCodeBlockForm',
    component: ArticleEditCodeBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditCodeBlockForm>;

const Template: ComponentStory<typeof ArticleEditCodeBlockForm> = (args) => (
    <ArticleEditCodeBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

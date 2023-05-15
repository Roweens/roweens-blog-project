import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditTextBlockForm } from './ArticleEditTextBlockForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleEditTextBlockForm',
    component: ArticleEditTextBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditTextBlockForm>;

const Template: ComponentStory<typeof ArticleEditTextBlockForm> = (args) => (
    <ArticleEditTextBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

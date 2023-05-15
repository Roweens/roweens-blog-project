import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditImageBlockForm } from './ArticleEditImageBlockForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleEditImageBlockForm',
    component: ArticleEditImageBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditImageBlockForm>;

const Template: ComponentStory<typeof ArticleEditImageBlockForm> = (args) => (
    <ArticleEditImageBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

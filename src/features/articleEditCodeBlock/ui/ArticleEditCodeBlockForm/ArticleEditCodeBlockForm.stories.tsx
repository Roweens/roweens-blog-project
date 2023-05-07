import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditCodeBlockForm } from './ArticleEditCodeBlockForm';

export default {
    title: 'shared/ArticleEditCodeBlockForm',
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

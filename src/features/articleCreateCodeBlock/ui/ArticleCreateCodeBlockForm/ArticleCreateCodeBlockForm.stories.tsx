import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateCodeBlockForm } from './ArticleCreateCodeBlockForm';

export default {
    title: 'shared/ArticleCreateCodeBlockForm',
    component: ArticleCreateCodeBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateCodeBlockForm>;

const Template: ComponentStory<typeof ArticleCreateCodeBlockForm> = (args) => (
    <ArticleCreateCodeBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

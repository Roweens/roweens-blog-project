import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateTextBlockForm } from './ArticleCreateTextBlockForm';

export default {
    title: 'shared/ArticleCreateTextBlockForm',
    component: ArticleCreateTextBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateTextBlockForm>;

const Template: ComponentStory<typeof ArticleCreateTextBlockForm> = (args) => (
    <ArticleCreateTextBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

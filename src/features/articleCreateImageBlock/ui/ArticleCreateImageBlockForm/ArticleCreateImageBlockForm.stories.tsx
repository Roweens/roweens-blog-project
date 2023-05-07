import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateImageBlockForm } from './ArticleCreateImageBlockForm';

export default {
    title: 'shared/ArticleCreateImageBlockForm',
    component: ArticleCreateImageBlockForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateImageBlockForm>;

const Template: ComponentStory<typeof ArticleCreateImageBlockForm> = (args) => (
    <ArticleCreateImageBlockForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

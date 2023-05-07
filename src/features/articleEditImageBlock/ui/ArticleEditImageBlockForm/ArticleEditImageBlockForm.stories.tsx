import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditImageBlockForm } from './ArticleEditImageBlockForm';

export default {
    title: 'shared/ArticleEditImageBlockForm',
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

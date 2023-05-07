import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditTextBlockForm } from './ArticleEditTextBlockForm';

export default {
    title: 'shared/ArticleEditTextBlockForm',
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

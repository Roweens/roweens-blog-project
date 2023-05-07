import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateForm } from './ArticleCreateForm';

export default {
    title: 'shared/ArticleCreateForm',
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

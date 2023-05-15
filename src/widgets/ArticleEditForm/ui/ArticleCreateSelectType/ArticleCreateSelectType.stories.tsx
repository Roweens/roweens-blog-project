import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateSelectType } from './ArticleCreateSelectType';

export default {
    title: 'widget/ArticleCreateBlock/ArticleCreateSelectType',
    component: ArticleCreateSelectType,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateSelectType>;

const Template: ComponentStory<typeof ArticleCreateSelectType> = (args) => (
    <ArticleCreateSelectType {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

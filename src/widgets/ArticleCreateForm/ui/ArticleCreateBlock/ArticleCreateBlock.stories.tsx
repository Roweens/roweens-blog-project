import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateBlock } from './ArticleCreateBlock';

export default {
    title: 'shared/ArticleCreateBlock',
    component: ArticleCreateBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateBlock>;

const Template: ComponentStory<typeof ArticleCreateBlock> = (args) => (
    <ArticleCreateBlock {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

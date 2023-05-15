import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateBlock } from './ArticleCreateBlock';
import { ArticleBlockType } from '@/entities/Article';

export default {
    title: 'widget/ArticleCreateBlock/ArticleCreateBlock',
    component: ArticleCreateBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateBlock>;

const Template: ComponentStory<typeof ArticleCreateBlock> = (args) => (
    <ArticleCreateBlock {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};

export const WithBlockArg = Template.bind({});
WithBlockArg.args = {
    block: {
        id: 2,
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};

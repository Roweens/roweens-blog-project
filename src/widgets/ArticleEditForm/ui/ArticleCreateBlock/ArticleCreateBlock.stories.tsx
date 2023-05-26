import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCreateBlock } from './ArticleCreateBlock';
import { ArticleBlockType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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

export const EmptyDark = Template.bind({});
EmptyDark.args = {};
EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoadingDark = Template.bind({});
isLoadingDark.args = {
    isLoading: true,
};
isLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithBlockArgDark = Template.bind({});
WithBlockArgDark.args = {
    block: {
        id: 2,
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};
WithBlockArgDark.decorators = [ThemeDecorator(Theme.DARK)];

export const EmptyRedesigned = Template.bind({});
EmptyRedesigned.args = {};
EmptyRedesigned.decorators = [NewDesignDecorator];

export const isLoadingRedesigned = Template.bind({});
isLoadingRedesigned.args = {
    isLoading: true,
};
isLoadingRedesigned.decorators = [NewDesignDecorator];

export const WithBlockArgRedesigned = Template.bind({});
WithBlockArgRedesigned.args = {
    block: {
        id: 2,
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};
WithBlockArgRedesigned.decorators = [NewDesignDecorator];

export const EmptyDarkRedesigned = Template.bind({});
EmptyDarkRedesigned.args = {};
EmptyDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const isLoadingDarkRedesigned = Template.bind({});
isLoadingDarkRedesigned.args = {
    isLoading: true,
};
isLoadingDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const WithBlockArgDarkRedesigned = Template.bind({});
WithBlockArgDarkRedesigned.args = {
    block: {
        id: 2,
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};
WithBlockArgDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

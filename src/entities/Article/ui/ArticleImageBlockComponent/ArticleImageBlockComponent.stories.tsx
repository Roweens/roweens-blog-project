import { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleImageBlock } from '../../model/types/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleImageBlockComponent>;

type Story = StoryObj<typeof ArticleImageBlockComponent>;

const defaultArgs = {
    block: {
        id: 2,
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    } as ArticleImageBlock,
};

export const Normal: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.RED)],
};

export const NormalRedesigned: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), NewDesignDecorator],
};

export const DarkRedesigned: Story = {
    args: defaultArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const RedRedesigned: Story = {
    args: defaultArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.RED),
    ],
};

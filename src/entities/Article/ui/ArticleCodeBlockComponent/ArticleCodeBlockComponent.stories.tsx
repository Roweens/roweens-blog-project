import { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleCodeBlock } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleCodeBlockComponent>;

type Story = StoryObj<typeof ArticleCodeBlockComponent>;

const storyArgs = {
    block: {
        id: 4,
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    } as ArticleCodeBlock,
};

export const Normal: Story = {
    args: storyArgs,
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: storyArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: storyArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.RED)],
};

export const NormalRedesigned: Story = {
    args: storyArgs,
    decorators: [StoreDecorator({}), NewDesignDecorator],
};

export const DarkRedesigned: Story = {
    args: storyArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const RedRedesigned: Story = {
    args: storyArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.RED),
    ],
};

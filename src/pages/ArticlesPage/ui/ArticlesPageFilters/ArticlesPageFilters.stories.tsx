import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articlePage: {
            view: 'Block',
            sort: ArticleSortField.CREATED,
            order: 'asc',
            search: '',
            type: ArticleType.ALL,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        articlePage: {
            view: 'Block',
            sort: ArticleSortField.CREATED,
            order: 'asc',
            search: '',
            type: ArticleType.ALL,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [
    StoreDecorator({
        articlePage: {
            view: 'Block',
            sort: ArticleSortField.CREATED,
            order: 'asc',
            search: '',
            type: ArticleType.ALL,
        },
    }),
    ThemeDecorator(Theme.RED),
];

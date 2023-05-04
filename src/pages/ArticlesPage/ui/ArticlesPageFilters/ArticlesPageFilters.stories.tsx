import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

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

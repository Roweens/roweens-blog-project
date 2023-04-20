import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 142124,
    user: { id: '1', username: 'user' },
    blocks: [],
    type: [],
    subtitle: '123',
    title: 'title',
};

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [{ ...article, id: '1' }, { ...article, id: '2' }, { ...article, id: '3' }],
        },
    ],
};

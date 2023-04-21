import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Rating } from '@/entities/Rating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const rating: Rating = {
    id: 1,
    rating: 4,
    feedback: 'Nice article',
};

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } })];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } }), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Red = Template.bind({});
Red.args = {

};
Red.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } }), ThemeDecorator(Theme.RED)];
Red.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

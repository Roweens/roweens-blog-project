import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Rating } from '@/entities/Rating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const rating: Rating = {
    id: 1,
    rating: 4,
    feedback: 'Nice article',
};

const defaultArgs = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
];
Normal.parameters = defaultArgs;

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    articleId: '1',
};
Dark.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = defaultArgs;

export const Red = Template.bind({});
Red.args = {
    articleId: '1',
};
Red.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.RED),
];
Red.parameters = defaultArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    articleId: '1',
};
NormalRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
];
NormalRedesigned.parameters = defaultArgs;

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {
    articleId: '1',
};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.DARK),
];
DarkRedesigned.parameters = defaultArgs;

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {
    articleId: '1',
};
RedRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.RED),
];
RedRedesigned.parameters = defaultArgs;

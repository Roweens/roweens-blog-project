import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

const defaultState = {
    articleDetailsPage: {
        comments: {
            isLoading: false,
            error: undefined,
            ids: [1, 2, 3],
            entities: {
                1: {
                    id: '1',
                    text: 'Comment text',
                    user: { id: 1, username: 'Admin' },
                },
                2: {
                    id: '3',
                    text: 'Comment text',
                    user: { id: 1, username: 'Admin' },
                },
                3: {
                    id: '3',
                    text: 'Comment text',
                    user: { id: 1, username: 'Admin' },
                },
            },
        },
    },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator(defaultState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(defaultState), ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [StoreDecorator(defaultState), ThemeDecorator(Theme.RED)];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                isLoading: true,
                error: undefined,
                ids: [1, 2, 3],
                entities: {
                    1: {
                        id: '1',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                    2: {
                        id: '3',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                    3: {
                        id: '3',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                },
            },
        },
    }),
];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultState),
];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultState),
    ThemeDecorator(Theme.DARK),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultState),
    ThemeDecorator(Theme.RED),
];

export const isLoadingRedesigned = Template.bind({});
isLoadingRedesigned.args = {};
isLoadingRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                isLoading: true,
                error: undefined,
                ids: [1, 2, 3],
                entities: {
                    1: {
                        id: '1',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                    2: {
                        id: '3',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                    3: {
                        id: '3',
                        text: 'Comment text',
                        user: { id: 1, username: 'Admin' },
                    },
                },
            },
        },
    }),
];

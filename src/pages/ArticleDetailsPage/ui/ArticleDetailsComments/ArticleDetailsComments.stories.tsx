import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
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
    }),
];

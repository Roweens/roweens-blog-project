import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'some text',
            user: {
                id: 1,
                username: 'User',
            },
        },
        {
            id: '2',
            text: 'some text',
            user: {
                id: 2,
                username: 'User',
            },
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'some text',
            user: {
                id: 1,
                username: 'User',
            },
        },
        {
            id: '2',
            text: 'some text',
            user: {
                id: 2,
                username: 'User',
            },
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    comments: [
        {
            id: '1',
            text: 'some text',
            user: {
                id: 1,
                username: 'User',
            },
        },
        {
            id: '2',
            text: 'some text',
            user: {
                id: 2,
                username: 'User',
            },
        },
    ],
};
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: [
        {
            id: '1',
            text: 'some text',
            user: {
                id: 1,
                username: 'User',
            },
        },
        {
            id: '2',
            text: 'some text',
            user: {
                id: 2,
                username: 'User',
            },
        },
    ],
};

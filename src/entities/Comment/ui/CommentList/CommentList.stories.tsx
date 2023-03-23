import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        id: '1',
        text: 'some text',
        user: {
            id: '1',
            username: 'User',
        },
    },
    {
        id: '2',
        text: 'some text',
        user: {
            id: '2',
            username: 'User',
        },
    }],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: [{
        id: '1',
        text: 'some text',
        user: {
            id: '1',
            username: 'User',
        },
    },
    {
        id: '2',
        text: 'some text',
        user: {
            id: '2',
            username: 'User',
        },
    }],
};

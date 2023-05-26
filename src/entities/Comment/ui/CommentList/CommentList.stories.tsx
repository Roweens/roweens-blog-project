import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

const defaultArgs = {
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

const loadingArgs = {
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

export const Normal = Template.bind({});
Normal.args = defaultArgs;

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Loading = Template.bind({});
Loading.args = loadingArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = defaultArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = defaultArgs;
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = defaultArgs;
RedRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = loadingArgs;
LoadingRedesigned.decorators = [NewDesignDecorator];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: 1,
            username: 'User',
        },
    },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
];

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: 1,
            username: 'User',
        },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: 1,
            username: 'User',
        },
    },
};
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: 1,
            username: 'User',
        },
    },
};

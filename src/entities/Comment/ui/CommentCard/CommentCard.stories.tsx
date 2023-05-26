import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
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

export const Dark = Template.bind({});
Dark.args = normalArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = normalArgs;
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = normalArgs;
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = normalArgs;
RedRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];

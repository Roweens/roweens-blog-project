import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Red = Template.bind({});
Red.args = {
    onSendComment: action('onSendComment'),
};
Red.decorators = [ThemeDecorator(Theme.RED), StoreDecorator({})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    onSendComment: action('onSendComment'),
};
NormalRedesigned.decorators = [NewDesignDecorator, StoreDecorator({})];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {
    onSendComment: action('onSendComment'),
};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {
    onSendComment: action('onSendComment'),
};
RedRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.RED),
    StoreDecorator({}),
];

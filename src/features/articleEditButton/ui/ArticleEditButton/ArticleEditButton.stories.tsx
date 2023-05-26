import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditButton } from './ArticleEditButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'features/ArticleEditButton',
    component: ArticleEditButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleEditButton>;

const Template: ComponentStory<typeof ArticleEditButton> = (args) => (
    <ArticleEditButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

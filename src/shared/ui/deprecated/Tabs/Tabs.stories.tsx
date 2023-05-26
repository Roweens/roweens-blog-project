import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const defaultArgs = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
        {
            value: 'tab 4',
            content: 'tab 4',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [ThemeDecorator(Theme.RED)];

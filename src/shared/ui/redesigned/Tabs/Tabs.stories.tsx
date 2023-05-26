import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
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

export const NormalHorizontal = Template.bind({});
NormalHorizontal.args = defaultArgs;

export const DarkHorizontal = Template.bind({});
DarkHorizontal.args = defaultArgs;
DarkHorizontal.decorators = [ThemeDecorator(Theme.DARK)];

export const RedHorizontal = Template.bind({});
RedHorizontal.args = defaultArgs;
RedHorizontal.decorators = [ThemeDecorator(Theme.RED)];

export const NormalVertical = Template.bind({});
NormalVertical.args = {
    ...defaultArgs,
    direction: 'column',
};

export const DarkVertical = Template.bind({});
DarkVertical.args = {
    ...defaultArgs,
    direction: 'column',
};
DarkVertical.decorators = [ThemeDecorator(Theme.DARK)];

export const RedVertical = Template.bind({});
RedVertical.args = {
    ...defaultArgs,
    direction: 'column',
};
RedVertical.decorators = [ThemeDecorator(Theme.RED)];

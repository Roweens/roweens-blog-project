import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../button/index';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'top left',
    items: [
        { content: 'Test test' },
        { content: 'Test test' },
        { content: 'Test test' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'top right',
    items: [
        { content: 'Test test' },
        { content: 'Test test' },
        { content: 'Test test' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottom left',
    items: [
        { content: 'Test test' },
        { content: 'Test test' },
        { content: 'Test test' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottom right',
    items: [
        { content: 'Test test' },
        { content: 'Test test' },
        { content: 'Test test' },
    ],
};

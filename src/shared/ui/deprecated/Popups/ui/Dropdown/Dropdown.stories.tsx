import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../button/index';

export default {
    title: 'shared/deprecated/Dropdown',
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

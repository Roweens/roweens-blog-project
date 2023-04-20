import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    items: [
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    items: [
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    items: [
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    items: [
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
        { content: 'Test test', value: '123' },
    ],
};

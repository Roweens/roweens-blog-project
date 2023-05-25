import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../../../Text';

export default {
    title: 'shared/deprecated/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Text title="Popover text" />,
    children: (
        <ul>
            <li>Popover item 1</li>
            <li>Popover item 2</li>
            <li>Popover item 3</li>
            <li>Popover item 4</li>
        </ul>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Text title="Popover text" />,
    children: (
        <ul>
            <li>Popover item 1</li>
            <li>Popover item 2</li>
            <li>Popover item 3</li>
            <li>Popover item 4</li>
        </ul>
    ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    trigger: <Text title="Popover text" />,
    children: (
        <ul>
            <li>Popover item 1</li>
            <li>Popover item 2</li>
            <li>Popover item 3</li>
            <li>Popover item 4</li>
        </ul>
    ),
};
Red.decorators = [ThemeDecorator(Theme.RED)];

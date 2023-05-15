import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { Text } from '../Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    onClose: action('onClose action'),
    children: (
        <>
            <Button>Drawer button</Button>
            <Text title="Drawer text" />
        </>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    onClose: action('onClose action'),
    children: (
        <>
            <Button>Drawer button</Button>
            <Text title="Drawer text" />
        </>
    ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    isOpen: true,
    onClose: action('onClose action'),
    children: (
        <>
            <Button>Drawer button</Button>
            <Text title="Drawer text" />
        </>
    ),
};
Red.decorators = [ThemeDecorator(Theme.RED)];

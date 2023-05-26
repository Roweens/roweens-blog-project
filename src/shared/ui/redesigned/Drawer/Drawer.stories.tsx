import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Drawer } from './Drawer';
import { Button } from '../button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { HStack } from '../Stack';

export default {
    title: 'shared/redesigned/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;
const defaultArgs = {
    isOpen: true,
    onClose: action('onClose action'),
    children: (
        <HStack max justify="center">
            <Button>Swipe me down</Button>
        </HStack>
    ),
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

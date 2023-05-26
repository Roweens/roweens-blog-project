import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED), StoreDecorator({})];

export const isAuthLight = Template.bind({});
isAuthLight.args = {};
isAuthLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
];

export const isAuthDark = Template.bind({});
isAuthDark.args = {};
isAuthDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];

export const isAuthRed = Template.bind({});
isAuthRed.args = {};
isAuthRed.decorators = [
    ThemeDecorator(Theme.RED),
    StoreDecorator({ user: { authData: {} } }),
];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [NewDesignDecorator, StoreDecorator({})];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.RED),
    StoreDecorator({}),
];

export const isAuthLightRedesigned = Template.bind({});
isAuthLightRedesigned.args = {};
isAuthLightRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
];

export const isAuthDarkRedesigned = Template.bind({});
isAuthDarkRedesigned.args = {};
isAuthDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];

export const isAuthRedRedesigned = Template.bind({});
isAuthRedRedesigned.args = {};
isAuthRedRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.RED),
    StoreDecorator({ user: { authData: {} } }),
];

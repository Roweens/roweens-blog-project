import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/shared/const/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <NotFoundPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED), StoreDecorator({})];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.RED),
];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { getRouteProfile } from '@/shared/const/router';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator([getRouteProfile(1)], getRouteProfile(':id'))],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const defaultState = {
    editableProfileCard: {
        form: {
            firstname: 'Roweens',
            lastname: 'Roweens',
            country: Countries.Russia,
            username: 'Cognus',
            city: 'Moscow',
            age: 20,
            currency: Currencies.USD,
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
    user: {
        authData: {
            features: {
                isProfileRatingEnabled: true,
            },
        },
    },
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(defaultState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(defaultState)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED), StoreDecorator(defaultState)];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [NewDesignDecorator, StoreDecorator(defaultState)];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator(defaultState),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.RED),
    StoreDecorator(defaultState),
];

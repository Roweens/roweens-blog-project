import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/editableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const profile: Profile = {
    firstname: 'Roweens',
    lastname: 'Roweens',
    country: Countries.Russia,
    username: 'Cognus',
    city: 'Moscow',
    age: 20,
    currency: Currencies.USD,
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
    ThemeDecorator(Theme.RED),
];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = {};
RedRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            error: undefined,
            readonly: true,
            form: profile,
            isLoading: false,
        },
    }),
    ThemeDecorator(Theme.RED),
];

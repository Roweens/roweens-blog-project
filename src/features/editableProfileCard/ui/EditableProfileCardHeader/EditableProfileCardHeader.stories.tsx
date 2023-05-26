import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/editableProfileHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

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

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

const readOnlyArgs = {
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: true,
        form: profile,
        isLoading: false,
    },
};

const editableArgs = {
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: false,
        form: profile,
        isLoading: false,
    },
};

export const ReadonlyLight = Template.bind({});
ReadonlyLight.args = {};
ReadonlyLight.decorators = [StoreDecorator(readOnlyArgs)];

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {};
ReadonlyDark.decorators = [
    StoreDecorator(readOnlyArgs),
    ThemeDecorator(Theme.DARK),
];

export const EditableLight = Template.bind({});
EditableLight.args = {};
EditableLight.decorators = [StoreDecorator(editableArgs)];

export const EditableDark = Template.bind({});
EditableDark.args = {};
EditableDark.decorators = [
    StoreDecorator(editableArgs),
    ThemeDecorator(Theme.DARK),
];

export const ReadonlyLightRedesigned = Template.bind({});
ReadonlyLightRedesigned.args = {};
ReadonlyLightRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(readOnlyArgs),
];

export const ReadonlyDarkRedesigned = Template.bind({});
ReadonlyDarkRedesigned.args = {};
ReadonlyDarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(readOnlyArgs),
    ThemeDecorator(Theme.DARK),
];

export const EditableLightRedesigned = Template.bind({});
EditableLightRedesigned.args = {};
EditableLightRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(editableArgs),
];

export const EditableDarkRedesigned = Template.bind({});
EditableDarkRedesigned.args = {};
EditableDarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(editableArgs),
    ThemeDecorator(Theme.DARK),
];

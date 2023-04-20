import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';

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

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const ReadonlyLight = Template.bind({});
ReadonlyLight.args = {

};
ReadonlyLight.decorators = [StoreDecorator({
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: true,
        form: profile,
        isLoading: false,
    },
})];

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {

};
ReadonlyDark.decorators = [StoreDecorator({
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: true,
        form: profile,
        isLoading: false,
    },
}), ThemeDecorator(Theme.DARK)];

export const EditableLight = Template.bind({});
EditableLight.args = {

};
EditableLight.decorators = [StoreDecorator({
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: false,
        form: profile,
        isLoading: false,
    },
})];

export const EditableDark = Template.bind({});
EditableDark.args = {

};
EditableDark.decorators = [StoreDecorator({
    editableProfileCard: {
        data: profile,
        error: undefined,
        readonly: false,
        form: profile,
        isLoading: false,
    },
}), ThemeDecorator(Theme.DARK)];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [StoreDecorator({
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
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
})];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const User = Template.bind({});
User.args = {};
User.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'User',
                avatar: 'https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6',
                roles: [UserRole.USER],
            },
        },
    }),
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'User',
                avatar: 'https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6',
                roles: [UserRole.ADMIN],
            },
        },
    }),
];

export const Manager = Template.bind({});
Manager.args = {};
Manager.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'User',
                avatar: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
                roles: [UserRole.MANAGER],
            },
        },
    }),
];
